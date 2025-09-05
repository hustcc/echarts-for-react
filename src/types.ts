import type { CSSProperties } from 'react';
import type { EChartsType } from 'echarts';
import type { EChartsOption, ECharts } from 'echarts';
import * as AllEcharts from 'echarts/types/src/export/all';

export type EChartsReactOption = EChartsOption;

export type EChartsInstance = EChartsType;

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
  readonly echarts?: ECharts;
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

export type EChartsNativeTypes = {
  Axis: AllEcharts.Axis;
  ChartView: AllEcharts.ChartView;
  ComponentModel: AllEcharts.ComponentModel;
  EChartsOption: AllEcharts.EChartsOption;
  EChartsType: AllEcharts.EChartsType;
  ElementEvent: AllEcharts.ElementEvent;
  Model: AllEcharts.Model;
  Payload: AllEcharts.Payload;
  SeriesModel: AllEcharts.SeriesModel;
  DatasetComponentOption: AllEcharts.DatasetComponentOption;
  TitleComponentOption: AllEcharts.TitleComponentOption;
  GridComponentOption: AllEcharts.GridComponentOption;
  RadarComponentOption: AllEcharts.RadarComponentOption;
  PolarComponentOption: AllEcharts.PolarComponentOption;
  GeoComponentOption: AllEcharts.GeoComponentOption;
  AngleAxisComponentOption: AllEcharts.AngleAxisComponentOption;
  RadiusAxisComponentOption: AllEcharts.RadiusAxisComponentOption;
  XAXisComponentOption: AllEcharts.XAXisComponentOption;
  YAXisComponentOption: AllEcharts.YAXisComponentOption;
  SingleAxisComponentOption: AllEcharts.SingleAxisComponentOption;
  ParallelComponentOption: AllEcharts.ParallelComponentOption;
  CalendarComponentOption: AllEcharts.CalendarComponentOption;
  MatrixComponentOption: AllEcharts.MatrixComponentOption;
  ToolboxComponentOption: AllEcharts.ToolboxComponentOption;
  TooltipComponentOption: AllEcharts.TooltipComponentOption;
  AxisPointerComponentOption: AllEcharts.AxisPointerComponentOption;
  BrushComponentOption: AllEcharts.BrushComponentOption;
  TimelineComponentOption: AllEcharts.TimelineComponentOption;
  LegendComponentOption: AllEcharts.LegendComponentOption;
  DataZoomComponentOption: AllEcharts.DataZoomComponentOption;
  VisualMapComponentOption: AllEcharts.VisualMapComponentOption;
  ThumbnailComponentOption: AllEcharts.ThumbnailComponentOption;
  GraphicComponentOption: AllEcharts.GraphicComponentOption;
  SeriesOption: AllEcharts.SeriesOption;
  RegisteredSeriesOption: AllEcharts.RegisteredSeriesOption;
  LineSeriesOption: AllEcharts.LineSeriesOption;
  BarSeriesOption: AllEcharts.BarSeriesOption;
  ScatterSeriesOption: AllEcharts.ScatterSeriesOption;
  PieSeriesOption: AllEcharts.PieSeriesOption;
  RadarSeriesOption: AllEcharts.RadarSeriesOption;
  MapSeriesOption: AllEcharts.MapSeriesOption;
  TreeSeriesOption: AllEcharts.TreeSeriesOption;
  TreemapSeriesOption: AllEcharts.TreemapSeriesOption;
  GraphSeriesOption: AllEcharts.GraphSeriesOption;
  ChordSeriesOption: AllEcharts.ChordSeriesOption;
  GaugeSeriesOption: AllEcharts.GaugeSeriesOption;
  FunnelSeriesOption: AllEcharts.FunnelSeriesOption;
  ParallelSeriesOption: AllEcharts.ParallelSeriesOption;
  SankeySeriesOption: AllEcharts.SankeySeriesOption;
  BoxplotSeriesOption: AllEcharts.BoxplotSeriesOption;
  CandlestickSeriesOption: AllEcharts.CandlestickSeriesOption;
  EffectScatterSeriesOption: AllEcharts.EffectScatterSeriesOption;
  LinesSeriesOption: AllEcharts.LinesSeriesOption;
  HeatmapSeriesOption: AllEcharts.HeatmapSeriesOption;
  PictorialBarSeriesOption: AllEcharts.PictorialBarSeriesOption;
  ThemeRiverSeriesOption: AllEcharts.ThemeRiverSeriesOption;
  SunburstSeriesOption: AllEcharts.SunburstSeriesOption;
  CustomSeriesOption: AllEcharts.CustomSeriesOption;
  PlainLegendComponentOption: AllEcharts.PlainLegendComponentOption;
  ScrollableLegendComponentOption: AllEcharts.ScrollableLegendComponentOption;
  SliderDataZoomComponentOption: AllEcharts.SliderDataZoomComponentOption;
  InsideDataZoomComponentOption: AllEcharts.InsideDataZoomComponentOption;
  ContinousVisualMapComponentOption: AllEcharts.ContinousVisualMapComponentOption;
  PiecewiseVisualMapComponentOption: AllEcharts.PiecewiseVisualMapComponentOption;
  MarkLineComponentOption: AllEcharts.MarkLineComponentOption;
  MarkPointComponentOption: AllEcharts.MarkPointComponentOption;
  MarkAreaComponentOption: AllEcharts.MarkAreaComponentOption;
  AriaComponentOption: AllEcharts.AriaComponentOption;
  AnimationDurationCallback: AllEcharts.AnimationDurationCallback;
  AnimationDelayCallback: AllEcharts.AnimationDelayCallback;
  AnimationDelayCallbackParams: AllEcharts.AnimationDelayCallbackParams;
  LabelFormatterCallback: AllEcharts.LabelFormatterCallback;
  DefaultLabelFormatterCallbackParams: AllEcharts.DefaultLabelFormatterCallbackParams;
  LabelLayoutOptionCallbackParams: AllEcharts.LabelLayoutOptionCallbackParams;
  LabelLayoutOptionCallback: AllEcharts.LabelLayoutOptionCallback;
  TooltipComponentFormatterCallback: AllEcharts.TooltipComponentFormatterCallback<any>;
  TooltipComponentFormatterCallbackParams: AllEcharts.TooltipComponentFormatterCallbackParams;
  TooltipComponentPositionCallback: AllEcharts.TooltipComponentPositionCallback;
  TooltipComponentPositionCallbackParams: AllEcharts.TooltipComponentPositionCallbackParams;
  CustomSeriesRenderItemParams: AllEcharts.CustomSeriesRenderItemParams;
  CustomSeriesRenderItemAPI: AllEcharts.CustomSeriesRenderItemAPI;
  CustomSeriesRenderItemReturn: AllEcharts.CustomSeriesRenderItemReturn;
  CustomSeriesRenderItem: AllEcharts.CustomSeriesRenderItem;
};
