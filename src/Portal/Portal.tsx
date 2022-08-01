import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const body = document.querySelector("body")!;

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const container = document.createElement("div");
  useEffect(() => {
    body.appendChild(container);

    return () => {
      body.removeChild(container);
    };
  }, [container]);

  return <>{createPortal(children, container)}</>;
};
