export type TextStyle = {
  name: string;
  description?: string;
  fontFamily: string;
  variant: string | number;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

export type BreakpointTextStyles = {
  sm: TextStyle[];
  md: TextStyle[];
  lg: TextStyle[];
  xlg: TextStyle[];
};

export type TextStyleCategory = {
  categoryName: string;
  styles: BreakpointTextStyles & { default: TextStyle[] };
};

const textStyles: (TextStyle | TextStyleCategory)[] = [
  {
    name: "body",
    fontFamily: "HK Grotesk",
    variant: "Regular",
    fontSize: "16px",
    lineHeight: "1.35",
    letterSpacing: "0px"
  },
  {
    name: "body-small",
    fontFamily: "HK Grotesk",
    variant: "Regular",
    fontSize: "14px",
    lineHeight: "1.35",
    letterSpacing: "0px"
  },
  {
    name: "label",
    fontFamily: "HK Grotesk",
    variant: "Regular",
    fontSize: "12px",
    lineHeight: "1.2",
    letterSpacing: "0px"
  },
  {
    name: "label-semibold",
    fontFamily: "HK Grotesk",
    variant: "SemiBold",
    fontSize: "12px",
    lineHeight: "1.2",
    letterSpacing: "0px"
  },
  {
    name: "code",
    fontFamily: "Red Hat Mono",
    variant: "Regular",
    fontSize: "12px",
    lineHeight: "1.2",
    letterSpacing: "0.32px"
  },
  {
    categoryName: "headline",
    styles: {
      default: [
        {
          name: "headline-06",
          fontFamily: "HK Grotesk",
          variant: "SemiBold",
          fontSize: "14px",
          lineHeight: "1.35",
          letterSpacing: "0px"
        },
        {
          name: "headline-05",
          fontFamily: "HK Grotesk",
          variant: "SemiBold",
          fontSize: "16px",
          lineHeight: "1.35",
          letterSpacing: "0px"
        }
      ],
      sm: [
        {
          name: "headline-04",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "19.2px",
          lineHeight: "1.2",
          letterSpacing: "0px"
        },
        {
          name: "headline-03",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "23.04px",
          lineHeight: "1.2",
          letterSpacing: "0px"
        },
        {
          name: "headline-02",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "27.65px",
          lineHeight: "1.2",
          letterSpacing: "0px"
        },
        {
          name: "headline-01",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "33.18px",
          lineHeight: "1.2",
          letterSpacing: "0px"
        }
      ],
      md: [
        {
          name: "headline-04",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "19.79px",
          lineHeight: "1.2",
          letterSpacing: "0px"
        },
        {
          name: "headline-03",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "24.5px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        },
        {
          name: "headline-02",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "30.3px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        },
        {
          name: "headline-01",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "37.47px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        }
      ],
      lg: [
        {
          name: "headline-04",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "20.5px",
          lineHeight: "1.2",
          letterSpacing: "0px"
        },
        {
          name: "headline-03",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "26.3px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        },
        {
          name: "headline-02",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "33.6px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        },
        {
          name: "headline-01",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "43.1px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        }
      ],
      xlg: [
        {
          name: "headline-04",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "20.9px",
          lineHeight: "1.2",
          letterSpacing: "0px"
        },
        {
          name: "headline-03",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "27.2px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        },
        {
          name: "headline-02",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "35.5px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        },
        {
          name: "headline-01",
          fontFamily: "HK Grotesk",
          variant: "Regular",
          fontSize: "46.3px",
          lineHeight: "1.2x",
          letterSpacing: "0px"
        }
      ]
    }
  }
];

export default textStyles;
