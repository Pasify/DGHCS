const theme = {
  list: {
    defaultProps: {
      ripple: true,
      className: "",
    },
    styles: {
      base: {
        item: {
          initial: {
            bg: "hover:bg-secondary hover:bg-opacity-80 focus:bg-blue-secondary focus:bg-opacity-80 active:bg-blue-secondary active:bg-opacity-80",
            color: "hover:text-black focus:text-black active:text-black",
          },
          selected: {
            bg: "bg-primary",
            color: "text-black",
          },
        },
      },
    },
  },
};

export default theme;
