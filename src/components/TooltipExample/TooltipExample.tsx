import { MouseEvent, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import "./TooltipExample.css";

const portalRoot = document.getElementById("portal-root");

const isHtmlElement = (target: EventTarget | null): target is HTMLElement => {
  return target instanceof HTMLElement;
};

interface Position {
  top: number;
  left: number;
}

interface Tooltip {
  visible: boolean;
  position: Position;
  content: string;
}

interface TooltipProps {
  children: ReactNode;
  position: Position;
}

const emptyTooltipState: Tooltip = {
  visible: false,
  position: {
    top: 0,
    left: 0,
  },
  content: "",
};

const Tooltip = ({ children, position }: TooltipProps) => {
  return createPortal(
    <div className="tooltip" style={{ top: position.top, left: position.left }}>
      {children}
    </div>,
    portalRoot as HTMLElement,
  );
};

const TooltipExample = () => {
  const [tooltip, setTooltip] = useState<Tooltip>(emptyTooltipState);

  const showTooltip = (event: MouseEvent) => {
    if (isHtmlElement(event.target)) {
      const { top, left } = event.target.getBoundingClientRect();
      setTooltip({
        visible: true,
        position: {
          top: top + 55,
          left: left - 35,
        },
        content: "This is a new tooltip",
      });
    }
  };

  const hideTooltip = () => {
    setTooltip(emptyTooltipState);
  };

  return (
    <>
      <button onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        Hover Me
      </button>
      {tooltip.visible && (
        <Tooltip position={tooltip.position}>{tooltip.content}</Tooltip>
      )}
    </>
  );
};

export default TooltipExample;
