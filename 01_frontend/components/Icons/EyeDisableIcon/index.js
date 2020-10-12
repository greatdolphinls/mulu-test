
import React, { memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 17,
    height: 17
  }
}));

const EyeIcon = ({className, viewBox, color, ...rest}) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 17 17"} {...rest} className={clsx(classes.root, className)}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-944.000000, -430.000000)" fill={color || "#6B76A1"} fillRule="nonzero">
          <g transform="translate(425.000000, 227.000000)">
            <g transform="translate(30.000000, 186.000000)">
              <path d="M500.596412,29.5981462 L498.951957,27.9536914 C498.303632,28.3600726 497.507537,28.492738 496.745911,28.298232 C495.742029,28.0418582 494.958142,27.2579708 494.701768,26.2540892 C494.507262,25.4924629 494.639927,24.6963676 495.046309,24.0480432 L493.240861,22.2425954 C492.152299,23.1634767 491.230778,24.2662102 490.517644,25.5022577 C490.606501,25.6557951 490.708552,25.8230763 490.823544,26.0011278 C491.230674,26.6315236 491.711676,27.2623459 492.261547,27.848875 C493.799803,29.4896811 495.555485,30.4583333 497.488421,30.458428 C498.585158,30.4404969 499.65429,30.1422449 500.596412,29.5981462 Z M502.200059,29.1983245 C502.205243,29.2033518 502.210363,29.2084715 502.215418,29.2136832 L505.792534,32.7907994 C506.069155,33.0674207 506.069155,33.5159126 505.792534,33.792534 C505.515913,34.0691553 505.067421,34.0691553 504.790799,33.792534 L501.626801,30.6285359 C500.401327,31.4171039 498.975283,31.8509627 497.5,31.875 C495.105973,31.875 493.010093,30.7186523 491.228036,28.8177916 C490.615798,28.1647374 490.084105,27.4674347 489.633488,26.7697055 C489.361227,26.3481402 489.17435,26.0159144 489.074781,25.8167763 C488.971852,25.6109182 488.975357,25.367885 489.084181,25.1650814 C489.885668,23.6714367 490.954784,22.340595 492.236004,21.2377386 L489.207466,18.2092006 C488.930845,17.9325793 488.930845,17.4840874 489.207466,17.207466 C489.484087,16.9308447 489.932579,16.9308447 490.209201,17.207466 L493.785094,20.7833592 C493.790254,20.7883642 493.795351,20.7934605 493.800383,20.7986481 L496.49641,23.4946755 C496.498065,23.4963139 496.499713,23.497962 496.501355,23.4996199 L499.50038,26.4986455 C499.502038,26.5002873 499.503686,26.5019355 499.505325,26.5035899 L502.200059,29.1983243 Z M496.103089,25.1048232 C496.018545,25.3583735 496.005859,25.6352385 496.074381,25.903548 C496.202567,26.4054888 496.594511,26.7974325 497.096452,26.9256194 C497.364761,26.9941409 497.641626,26.9814555 497.895177,26.8969114 L496.103089,25.1048232 Z M504.176456,24.9988685 C503.769325,24.3684707 503.288323,23.7376463 502.738452,23.1511152 C501.200196,21.510304 499.444514,20.5416488 497.498361,20.5416469 C497.052491,20.540615 496.608033,20.5914142 496.173939,20.6930244 C495.793033,20.7821844 495.411969,20.5456777 495.322809,20.1647719 C495.233649,19.783866 495.470156,19.4028023 495.851061,19.3136423 C496.392067,19.1870072 496.945978,19.1236981 497.5,19.1249444 C499.894027,19.1249444 501.989908,20.2813336 503.771965,22.1822003 C504.384203,22.8352565 504.915896,23.5325612 505.366513,24.2302926 C505.638774,24.6518591 505.825651,24.9840858 505.92522,25.1832245 C506.027969,25.3887236 506.024664,25.6312932 505.916355,25.833917 C505.46314,26.681786 504.922643,27.4800206 504.303652,28.21564 C504.051779,28.5149704 503.60494,28.5534421 503.30561,28.301569 C503.00628,28.0496959 502.967808,27.6028571 503.219681,27.3035267 C503.693605,26.7403076 504.116257,26.1361883 504.482739,25.4984026 C504.393792,25.3446835 504.291613,25.1771767 504.176456,24.9988685 Z"></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}

export default memo(EyeIcon);
