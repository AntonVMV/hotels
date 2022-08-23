import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";

interface PortalProps {
  children: ReactNode;
  isActive: boolean;
}

const body = document.querySelector("body")!;

export const Portal: React.FC<PortalProps> = ({ children, isActive }) =>
  ReactDOM.createPortal(
    <AnimatePresence mode="wait">{isActive && children}</AnimatePresence>,
    body
  );
