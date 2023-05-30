import React from "react";
import { InView } from "react-intersection-observer";

type animationClassName =
  | "animate-smoothUpFirst_therfect"
  | "animate-smoothUpSecond_therfect"
  | "animate-smoothUpThird_therfect"
  | String;

export const InviewComponent = ({
  children,
  triggerOnce = true,
  threshold = 0,
  animationClassName,
}: {
  animationClassName: animationClassName;

  children: JSX.Element;
  triggerOnce?: boolean;
  threshold?: number;
}) => {
  return (
    <InView triggerOnce={triggerOnce} threshold={threshold}>
      {({ inView, ref }) => {
        const clonedElement = React.cloneElement(children, {
          className: children.props.className
            ? children.props.className +
              ` ${inView ? animationClassName : ""} opacity-0`
            : `${inView ? animationClassName : ""} opacity-0`,
          ref,
        });

        return clonedElement;
      }}
    </InView>
  );
};
