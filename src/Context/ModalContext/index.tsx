import React, {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface IChildren {
  children:
    | string
    | JSX.Element
    | JSX.Element[]
    | ReactElement
    | React.ReactNode;
}

interface IModalArg {
  title?: string | ReactElement;
  body: ReactElement | null;
  footer?: ReactElement | null;
  style?: React.CSSProperties | null;
  state?: boolean;
  closeIcon?: boolean;
}

interface IAppModalContext {
  setModalArg?: Function;
  modalArg: IModalArg;
  openModal?: (item: IModalArg) => void;
  closeModal?: Function;
}

export const AppModalContext = createContext({});

const AppModalContextProvider = (props: IChildren) => {
  const [modalArg, setModalArg] = useState<IModalArg>({
    body: null,
    footer: null,
    style: null,
    title: "",
    state: false,
    closeIcon: true,
  });

  const [modal_overlay, setModalOverlay] = useState<any>();
  const [modal, setModal] = useState<any>();
  const [modalCl, setModalCl] = useState<any>();

  useEffect(() => {
    setModalOverlay(window?.document.querySelector("#modal_overlay"));
    setModal(window?.document.querySelector("#modal"));
    setModalCl(modal?.classList);
  }, [modal?.classList, modalArg, modal_overlay?.classList]);

  const closeModal = useCallback(() => {
    modalCl?.add("-translate-y-full");
    window?.document?.body?.classList?.remove("overflow-hidden");
    window?.document?.body?.classList?.remove("h-screen");
    setModalArg({ title: "", body: null, footer: null, style: null });
    setTimeout(() => {
      modalCl?.add("opacity-0");
      modalCl?.add("scale-150");
    }, 100);
    setTimeout(() => modal_overlay?.classList.add("hidden"), 300);
  }, [modalCl, modal_overlay?.classList]);

  const openModal = useCallback(
    (arg: IModalArg) => {
      modal_overlay?.classList.remove("hidden");
      window?.document?.body?.classList?.add("overflow-hidden");
      window?.document?.body?.classList?.add("h-screen");
      setTimeout(() => {
        modalCl?.remove("opacity-0");
        modalCl?.remove("-translate-y-full");
        modalCl?.remove("scale-150");
      }, 100);
      setModalArg({
        title: arg.title ?? "",
        body: arg.body ?? null,
        footer: arg.footer ?? null,
        style: arg.style ?? null,
      });
    },
    [modalCl, modal_overlay?.classList],
  );

  const contextValues = useMemo(() => {
    return {
      setModalArg,
      modalArg,
      openModal,
      closeModal,
    };
  }, [modalArg, openModal, closeModal]);

  return (
    <AppModalContext.Provider value={contextValues}>
      {/* <Header /> */}
      {props.children}
      <>
        {/* overlay */}
        <div
          onClick={closeModal}
          id="modal_overlay"
          className="absolute inset-0 z-50 flex hidden h-screen w-full items-start justify-center bg-content bg-opacity-80 pt-10 md:items-center md:pt-0"
        >
          {/* modal */}
          <>
            <div
              id="modal"
              onClick={(e) => e.stopPropagation()}
              className="z-100 relative min-w-[640px] -translate-y-full	 scale-150 transform rounded-[10px] bg-dark opacity-0 shadow-lg transition-opacity transition-transform duration-300 ease-in-out sm:w-[100%] sm:min-w-[100%]"
              style={{ ...modalArg.style }}
            >
              {/* button close */}
              {modalArg.title && (
                <div className="flex items-center justify-between border-b border-gray px-4 py-3">
                  {modalArg.title && (
                    <h2 className="w-full overflow-hidden  text-ellipsis whitespace-nowrap text-xl font-semibold text-black">
                      {modalArg.title}
                    </h2>
                  )}
                  <button
                    onClick={() => closeModal()}
                    className="bg-red-500 hover:bg-red-600 h-10 w-10 rounded-full text-2xl focus:outline-none"
                  >
                    &times;
                  </button>
                </div>
              )}

              <div className="relative w-full p-3">{modalArg.body}</div>

              {modalArg?.footer && (
                <div className="absolute bottom-0 left-0 flex w-full items-center justify-end gap-3 border-t border-gray px-4 py-3">
                  {modalArg?.footer}
                </div>
              )}
            </div>
          </>
        </div>
      </>
    </AppModalContext.Provider>
  );
};

export default AppModalContextProvider;

export const useAppModalContext = () =>
  useContext(AppModalContext) as IAppModalContext;
