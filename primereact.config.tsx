import { ConfirmPopupPassThroughOptions } from "primereact/confirmpopup";

export const acceptDialogStyles: ConfirmPopupPassThroughOptions = {
  root: {
    className: "flex flex-col justify-center items-center",
  },
  icon: {
    className: "text-lg text-danger",
  },
  acceptButton: {
    root: {
      className:
        "btn btn-danger bg-danger border-danger h-8 hover:bg-danger hover:border-danger",
    },
    label: {
      className: "text-sm font-normal",
    },
  },
  rejectButton: {
    root: {
      className:
        "btn btn-primary bg-primary border-primary h-8 hover:bg-primary hover:border-primary",
    },
    label: {
      className: "text-sm font-normal",
    },
  },
};
