export const Framer = {
  ImageAnimation: {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 211 },
    },
  },
  TextAnimation: {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 211 },
    },
  },
  ButtonAnimation: {
    hidden: {
      x: -1200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 111 },
    },
  },
  ParagraphAnimation: {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  ModalAnimation: {
    hidden: {
      y: -1000,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6 },
    },
  },
  Backdrop: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};
