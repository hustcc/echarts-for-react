import * as React from "react";

interface ReactEchartsProps {
    option: Object;
    notMerge?: boolean;
    lazyUpdate?: boolean;
    style?: Object;
    className?: string;
    theme?: string;
    onChartReady?: () => void;
    showLoading?: boolean;
    loadingOption?: Object;
    onEvents?: Object;
}

export default class ReactEcharts extends React.Component<ReactEchartsProps, any>{}
