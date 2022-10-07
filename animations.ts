export const fadeInUp = {
  initial: {
    opacity: 0,
    y: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const routerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition : {
      delay : 0.1,
      duration : 0.1
    }
  },
  exit: {
    opacity : 0,
    transition : {
      delay : 0.1,
      ease : "easeInOut"
    }
  }
};


export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
