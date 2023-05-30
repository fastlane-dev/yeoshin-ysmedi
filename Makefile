TAG?=latest
DEV_IMAGE_REGISTRY?=699158113629.dkr.ecr.ap-northeast-2.amazonaws.com
PROD_IMAGE_REGISTRY?=398909565079.dkr.ecr.ap-northeast-2.amazonaws.com
PROFILE?=dev

KUSTOMIZE_VER?=4.4.1

K8S_BIN_DIR = $(shell pwd)
KUSTOMIZE = ${K8S_BIN_DIR}/kustomize
KUBECTL = ${K8S_BIN_DIR}/kubectl

kustomize:
ifeq (, $(which kustomize))
	@{ \
	set -e ;\
        cd ${K8S_BIN_DIR} ;\
	curl -o kustomize.tar.gz -L https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize/v4.4.1/kustomize_v4.4.1_linux_amd64.tar.gz ;\
        tar -xvf kustomize.tar.gz ;\
  	chmod +x kustomize ;\
	}
else
KUSTOMIZE=$(which kustomize)
endif

kubectl:
ifeq (, $(which kubectl))
	@{ \
	set -e ;\
        cd ${K8S_BIN_DIR} ;\
	curl -LO https://dl.k8s.io/release/v1.23.0/bin/linux/amd64/kubectl ;\
	chmod +x kubectl ;\
	}
else
KUBECTL=$(which kubectl)
endif


dev-deploy: kubectl kustomize
	cd manifests/overlays/${PROFILE} && \
	$(KUSTOMIZE) edit set image admin-fe=${DEV_IMAGE_REGISTRY}/ysmedi:${TAG} && \
	$(KUSTOMIZE) build && \
	$(KUBECTL) apply -k .

prod-deploy: kubectl kustomize
	cd manifests/overlays/${PROFILE} && \
	$(KUSTOMIZE) edit set image admin-fe=${PROD_IMAGE_REGISTRY}/ysmedi:${TAG} && \
	$(KUSTOMIZE) build && \
	$(KUBECTL) apply -k .

undeploy: kubectl kustomize
	cd manifests/overlays/${PROFILE} && \
	$(KUBECTL) delete -k .