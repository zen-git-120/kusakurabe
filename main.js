import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';

const cal = new CalHeatmap();

cal.paint({
  itemSelector: '#cal-heatmap',
  domain: { type: 'month'},
  subDomain: { type: 'day'},
})