export type PrimitivesValues = {
  mode: {
    name: "Value";
    id: string;
  };
  number: any[];
  color: {
    /** @example "color/blue/10" */
    name: string;
    /** @example "8px" */
    color: string;
    var: never;
    rootAlias: never;
  }[];
}[];

export type ModalValues = {
  mode: {
    /** @example 'sm' */
    name: string;
    id: string;
  };
  color: never;
  number: {
    /**  @example 'Modal_MaxWidth' */
    name: string;
    /**  @example '375px' */
    value: string;
    var: never;
    rootAlias: never;
  }[];
};

export type ColorValues = {
  mode: {
    name: "Light" | "Dark";
    id: string;
  };
  color: {
    /** @example "color/background" */
    name: string;
    /** @example "rgb(1,1,1)"" */
    color: string;
    /** @example "color/neutral/white" */
    var: string;
    /** @example "color/neutral/white" */
    rootAlias: string;
  }[];
};

export type SizesValues = {
  mode: {
    name: "Mode 1";
    id: string;
  };
  color: never;
  number: {
    /** @example "container/4xs" */
    name: string;
    /** @example "8px" */
    value: string;
    var: never;
    rootAlias: never;
  }[];
};

export type BreakpointValues = {
  mode: {
    name: "Value";
    id: string;
  };
  values: {
    /** sm (375px) or md (896px) or ... */
    mode: string;
    color: never;
    number: {
      /** @example "Grid_Columns" */
      name: string;
      /** @example "4px" */
      value: string;
      var: never;
      rootAlias: never;
    }[];
  }[];
};

export type BorderValues = {
  mode: {
    name: "Value";
    id: string;
  };
  color: never;
  number: {
    /** @example "divider" */
    name: string;
    /** @example "8px" */
    value: string;
    var: never;
    rootAlias: never;
  }[];
};

export type FigmaTheme = {
  /**
   * Primitives, Colors, Sizes, Breakpoint, Border
   */
  name: string;
  values:
    | PrimitivesValues
    | ColorValues
    | SizesValues
    | BreakpointValues
    | BorderValues;
}[];
