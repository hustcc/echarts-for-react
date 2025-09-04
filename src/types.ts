import type { CSSProperties } from 'react';
import * as echarts from 'echarts';
import {
  AngleAxisOption,
  AnimationDelayCallback,
  AnimationDelayCallbackParam,
  AnimationDurationCallback,
  AriaOption,
  Axis,
  AxisBreakChangedEvent,
  AxisPointerOption,
  BarSeriesOption,
  BoxplotSeriesOption,
  BrushOption,
  CalendarOption,
  CallbackDataParams,
  CandlestickSeriesOption,
  ChartView,
  ChordSeriesOption,
  CollapseAxisBreakPayload,
  ComponentModel,
  ComponentView,
  ComposeOption,
  ContinousVisualMapOption,
  CustomSeriesOption,
  CustomSeriesRenderItem,
  CustomSeriesRenderItemAPI,
  CustomSeriesRenderItemParams,
  CustomSeriesRenderItemReturn,
  DataZoomComponentOption,
  DatasetOption,
  DownplayPayload,
  ECBasicOption,
  ECElementEvent,
  EChartsInitOpts,
  EChartsOption,
  EChartsType,
  EffectScatterSeriesOption,
  ElementEvent,
  ExpandAxisBreakPayload,
  FunnelSeriesOption,
  GaugeSeriesOption,
  GeoOption,
  GraphSeriesOption,
  GraphicComponentLooseOption,
  GridOption,
  HeatmapSeriesOption,
  HighlightPayload,
  ImagePatternObject,
  InsideDataZoomOption,
  LabelFormatterCallback,
  LabelLayoutOptionCallback,
  LabelLayoutOptionCallbackParams,
  LegendComponentOption,
  LegendOption,
  LineSeriesOption,
  LinearGradientObject,
  LinesSeriesOption,
  MapSeriesOption,
  MarkAreaOption,
  MarkLineOption,
  MarkPointOption,
  MatrixOption,
  Model,
  PRIORITY,
  ParallelCoordinateSystemOption,
  ParallelSeriesOption,
  PatternObject,
  Payload,
  PictorialBarSeriesOption,
  PieSeriesOption,
  PiecewiseVisualMapOption,
  PolarOption,
  RadarOption,
  RadarSeriesOption,
  RadialGradientObject,
  RadiusAxisOption,
  RegisteredSeriesOption,
  ResizeOpts,
  SVGPatternObject,
  SankeySeriesOption,
  ScatterSeriesOption,
  ScrollableLegendOption,
  SelectChangedEvent,
  SelectChangedPayload,
  SeriesData,
  SeriesModel,
  SeriesOption,
  SetOptionOpts,
  SetOptionTransitionOpt,
  SetOptionTransitionOptItem,
  SetThemeOpts,
  SingleAxisOption,
  SliderDataZoomOption,
  SunburstSeriesOption,
  ThemeRiverSeriesOption,
  ThumbnailOption,
  TimelineOption,
  TitleOption,
  ToggleAxisBreakPayload,
  ToolboxComponentOption,
  TooltipFormatterCallback,
  TooltipOption,
  TooltipPositionCallback,
  TooltipPositionCallbackParams,
  TopLevelFormatterParams,
  TreeSeriesOption,
  TreemapSeriesOption,
  VisualMapComponentOption,
  XAXisOption,
  YAXisOption,
  ZRColor,
} from 'echarts/types/dist/shared';
export type EChartsReactOption = echarts.EChartsOption;

export type EChartsInstance = echarts.EChartsType;

export type Opts = {
  readonly devicePixelRatio?: number;
  readonly renderer?: 'canvas' | 'svg';
  readonly width?: number | null | undefined | 'auto';
  readonly height?: number | null | undefined | 'auto';
  readonly locale?: string;
};

export type EChartsReactProps = {
  /**
   * echarts library entry, use it for import necessary.
   */
  readonly echarts?: echarts.ECharts;
  /**
   * `className` for container
   */
  readonly className?: string;
  /**
   * `style` for container
   */
  readonly style?: CSSProperties;
  /**
   * echarts option
   */
  readonly option: EChartsReactOption;
  /**
   * echarts theme config, can be:
   * 1. theme name string
   * 2. theme object
   */
  readonly theme?: string | Record<string, any>;
  /**
   * notMerge config for echarts, default is `false`
   */
  readonly notMerge?: boolean;
  /**
   * replaceMerge config for echarts, default is `null`
   */
  readonly replaceMerge?: string | string[];
  /**
   * lazyUpdate config for echarts, default is `false`
   */
  readonly lazyUpdate?: boolean;
  /**
   * showLoading config for echarts, default is `false`
   */
  readonly showLoading?: boolean;
  /**
   * loadingOption config for echarts, default is `null`
   */
  readonly loadingOption?: null | object;
  /**
   * echarts opts config, default is `{}`
   */
  readonly opts?: Opts;
  /**
   * when after chart render, do the callback with echarts instance
   */
  readonly onChartReady?: (instance: EChartsInstance) => void;
  /**
   * bind events, default is `{}`
   */
  readonly onEvents?: Record<string, Function>;
  /**
   * should update echarts options
   */
  readonly shouldSetOption?: (prevProps: EChartsReactProps, props: EChartsReactProps) => boolean;

  /**
   * should trigger resize when window resize
   */
  readonly autoResize?: boolean;
};

export {
  AngleAxisOption,
  AnimationDelayCallback,
  AnimationDelayCallbackParam,
  AnimationDurationCallback,
  AriaOption,
  Axis,
  AxisBreakChangedEvent,
  AxisPointerOption,
  BarSeriesOption,
  BoxplotSeriesOption,
  BrushOption,
  CalendarOption,
  CallbackDataParams,
  CandlestickSeriesOption,
  ChartView,
  ChordSeriesOption,
  CollapseAxisBreakPayload,
  ComponentModel,
  ComponentView,
  ComposeOption,
  ContinousVisualMapOption,
  CustomSeriesOption,
  CustomSeriesRenderItem,
  CustomSeriesRenderItemAPI,
  CustomSeriesRenderItemParams,
  CustomSeriesRenderItemReturn,
  DataZoomComponentOption,
  DatasetOption,
  DownplayPayload,
  ECBasicOption,
  ECElementEvent,
  EChartsInitOpts,
  EChartsOption,
  EChartsType,
  EffectScatterSeriesOption,
  ElementEvent,
  ExpandAxisBreakPayload,
  FunnelSeriesOption,
  GaugeSeriesOption,
  GeoOption,
  GraphSeriesOption,
  GraphicComponentLooseOption,
  GridOption,
  HeatmapSeriesOption,
  HighlightPayload,
  ImagePatternObject,
  InsideDataZoomOption,
  LabelFormatterCallback,
  LabelLayoutOptionCallback,
  LabelLayoutOptionCallbackParams,
  LegendComponentOption,
  LegendOption,
  LineSeriesOption,
  LinearGradientObject,
  LinesSeriesOption,
  MapSeriesOption,
  MarkAreaOption,
  MarkLineOption,
  MarkPointOption,
  MatrixOption,
  Model,
  PRIORITY,
  ParallelCoordinateSystemOption,
  ParallelSeriesOption,
  PatternObject,
  Payload,
  PictorialBarSeriesOption,
  PieSeriesOption,
  PiecewiseVisualMapOption,
  PolarOption,
  RadarOption,
  RadarSeriesOption,
  RadialGradientObject,
  RadiusAxisOption,
  RegisteredSeriesOption,
  ResizeOpts,
  SVGPatternObject,
  SankeySeriesOption,
  ScatterSeriesOption,
  ScrollableLegendOption,
  SelectChangedEvent,
  SelectChangedPayload,
  SeriesData,
  SeriesModel,
  SeriesOption,
  SetOptionOpts,
  SetOptionTransitionOpt,
  SetOptionTransitionOptItem,
  SetThemeOpts,
  SingleAxisOption,
  SliderDataZoomOption,
  SunburstSeriesOption,
  ThemeRiverSeriesOption,
  ThumbnailOption,
  TimelineOption,
  TitleOption,
  ToggleAxisBreakPayload,
  ToolboxComponentOption,
  TooltipFormatterCallback,
  TooltipOption,
  TooltipPositionCallback,
  TooltipPositionCallbackParams,
  TopLevelFormatterParams,
  TreeSeriesOption,
  TreemapSeriesOption,
  VisualMapComponentOption,
  XAXisOption,
  YAXisOption,
  ZRColor,
};
