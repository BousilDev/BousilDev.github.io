import {
  createContext,
  useContext,
  useState,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

interface ScrollContextType {
  cvRef: RefObject<HTMLDivElement | null>;
  isPdfVisible: boolean;
  scrollToCv: () => void;
  showPdf: boolean;
}

interface ScrollProviderProps {
  children: ReactNode;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  const scrollToCv = () => {
    setIsPdfVisible(true);
    setTimeout(() => {
      cvRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <ScrollContext.Provider
      value={{ cvRef, isPdfVisible, scrollToCv, showPdf: false }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
