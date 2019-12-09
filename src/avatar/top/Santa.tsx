import * as React from 'react'

export default class Santa extends React.Component {
    static optionValue = 'Santa';

    render() {
        return (
            <g xmlns="http://www.w3.org/2000/svg" id="svgg" transform='scale(0.4), rotate(10), translate(110, -70)'>
                <path id="path0"
                      d="M158.889 3.853 C 158.323 3.921,157.573 4.057,157.222 4.154 C 156.861 4.254,155.002 4.332,152.945 4.332 C 143.935 4.335,144.247 4.185,136.980 12.008 C 135.915 13.154,134.420 14.578,133.657 15.171 C 132.895 15.764,130.532 17.639,128.407 19.337 C 123.811 23.009,122.237 24.147,119.615 25.695 C 118.532 26.335,116.620 27.534,115.365 28.360 C 112.987 29.925,109.825 31.581,108.849 31.774 L 108.282 31.885 108.791 31.145 C 109.719 29.796,111.554 28.268,115.005 25.972 C 118.217 23.835,119.414 22.891,124.567 18.432 C 126.880 16.430,126.855 16.502,125.462 15.928 C 124.801 15.655,118.209 15.827,117.458 16.137 C 113.946 17.582,100.505 28.936,94.815 35.265 C 93.751 36.448,92.108 38.279,91.164 39.333 C 90.221 40.387,87.898 42.900,86.003 44.917 C 79.596 51.736,79.340 52.036,78.081 54.221 C 77.438 55.337,76.080 57.600,75.062 59.250 C 70.857 66.070,64.407 79.581,58.983 92.936 C 57.290 97.105,56.491 101.292,55.665 110.333 C 54.885 118.878,54.411 121.779,53.079 126.173 C 52.126 129.315,51.853 130.499,50.834 135.917 C 50.368 138.392,49.695 141.654,49.337 143.167 C 48.582 146.364,47.971 149.428,46.915 155.316 C 45.880 161.088,45.273 164.050,44.404 167.568 C 43.555 171.007,43.556 170.998,43.995 170.883 C 44.435 170.768,44.963 169.814,45.913 167.417 C 47.086 164.458,48.430 161.779,50.430 158.417 C 52.859 154.333,53.702 152.706,55.659 148.339 C 57.698 143.784,58.644 142.181,60.820 139.583 C 61.741 138.483,63.147 136.646,63.944 135.500 C 68.607 128.793,70.415 126.779,74.500 123.745 C 83.309 117.202,92.934 111.920,105.939 106.493 C 110.118 104.749,111.003 104.314,114.833 102.115 C 116.438 101.194,118.837 99.926,120.167 99.296 C 121.496 98.666,123.221 97.837,124.000 97.453 C 126.314 96.314,130.303 93.834,134.574 90.881 C 139.491 87.481,140.332 86.912,143.135 85.088 C 145.771 83.372,147.512 81.719,150.510 78.083 C 151.644 76.708,153.812 74.302,155.328 72.735 C 158.250 69.715,158.453 69.433,161.145 64.667 C 163.186 61.053,166.579 55.579,166.756 55.615 C 167.612 55.790,167.497 59.271,166.573 61.170 C 166.154 62.030,165.322 63.899,164.724 65.325 C 162.602 70.378,160.016 74.242,154.682 80.333 C 152.190 83.179,152.175 83.297,154.359 82.923 C 158.555 82.203,164.798 79.381,170.260 75.737 C 172.928 73.956,179.500 70.700,179.500 71.159 C 179.500 73.158,167.049 82.940,160.083 86.414 C 157.134 87.884,156.121 88.138,152.053 88.424 C 147.011 88.778,146.318 88.995,143.251 91.179 C 138.982 94.218,135.824 96.093,127.366 100.606 C 124.186 102.304,120.890 104.080,120.042 104.555 C 118.232 105.566,118.283 105.399,118.835 108.522 C 119.917 114.645,120.186 116.408,120.496 119.417 C 120.685 121.250,121.059 124.100,121.328 125.750 C 123.234 137.438,121.823 148.088,117.002 158.417 C 115.468 161.705,115.342 161.644,119.218 159.490 C 123.876 156.902,128.736 154.946,134.500 153.340 C 136.196 152.867,138.665 152.178,139.986 151.809 C 146.290 150.049,158.219 145.879,162.926 143.791 C 166.087 142.388,166.845 142.131,173.920 140.070 C 183.264 137.349,187.234 136.357,204.917 132.331 C 215.988 129.809,220.201 128.826,224.167 127.838 C 227.786 126.936,230.180 126.479,237.250 125.341 C 247.577 123.678,248.919 123.331,258.667 119.800 C 261.188 118.887,264.912 117.548,266.944 116.824 C 286.511 109.850,298.219 104.248,311.917 95.306 C 317.247 91.827,319.346 90.771,324.417 89.022 C 330.049 87.079,332.828 85.848,333.085 85.184 C 333.141 85.039,332.701 84.513,331.934 83.807 C 331.252 83.178,330.474 82.308,330.206 81.873 C 329.308 80.415,326.607 77.266,324.670 75.417 C 323.614 74.408,320.875 71.691,318.583 69.378 C 313.805 64.555,312.242 63.180,309.333 61.243 C 308.188 60.480,306.725 59.485,306.083 59.032 C 305.442 58.579,303.942 57.665,302.750 57.001 C 300.091 55.520,298.943 54.714,297.173 53.089 C 295.198 51.276,293.099 49.947,288.374 47.518 C 284.058 45.299,282.458 44.351,280.750 43.000 C 278.028 40.848,275.417 39.468,268.917 36.747 C 266.808 35.864,264.183 34.669,263.083 34.090 C 261.983 33.512,259.771 32.437,258.167 31.702 C 256.563 30.966,253.675 29.599,251.750 28.663 C 240.461 23.174,231.820 19.126,228.917 17.966 C 228.000 17.600,224.963 16.529,222.167 15.585 C 219.371 14.642,215.931 13.447,214.523 12.930 C 209.447 11.066,192.915 7.034,186.083 5.992 C 185.350 5.880,183.400 5.491,181.750 5.126 C 179.142 4.550,178.336 4.444,175.583 4.319 C 173.842 4.241,172.004 4.092,171.500 3.989 C 170.438 3.773,160.452 3.665,158.889 3.853 "
                      stroke="none" fill="#e01c24" fillRule="evenodd" />
                <path id="path1"
                      d="M144.389 0.325 C 141.589 0.765,140.840 1.306,136.903 5.734 C 136.177 6.550,134.313 8.313,132.761 9.651 C 131.209 10.989,129.523 12.571,129.015 13.167 C 127.909 14.463,128.017 14.462,125.519 13.205 L 123.621 12.250 120.852 12.259 C 112.627 12.285,107.708 14.853,97.250 24.581 C 96.150 25.604,94.500 27.117,93.583 27.944 C 90.661 30.581,89.392 32.073,85.243 37.755 C 82.186 41.942,81.167 43.234,78.937 45.748 C 74.935 50.260,72.939 53.308,66.502 64.744 C 65.472 66.574,63.935 69.199,63.086 70.577 C 60.456 74.848,59.853 76.276,57.914 82.833 C 56.600 87.275,56.023 88.922,54.976 91.217 C 52.794 96.001,51.978 99.849,51.001 109.961 C 50.169 118.582,49.950 119.895,48.477 125.148 C 46.499 132.203,45.550 136.884,43.099 151.678 C 41.255 162.805,39.391 172.163,38.925 172.631 C 38.860 172.697,36.281 172.797,33.195 172.855 C 24.598 173.016,22.557 173.460,16.903 176.404 C 12.122 178.894,10.946 179.970,9.178 183.477 C 8.658 184.507,8.628 184.534,8.113 184.428 C 2.610 183.302,0.164 184.899,0.028 189.708 C -0.040 192.088,0.096 192.561,1.493 194.822 C 2.685 196.751,2.851 197.189,3.578 200.333 C 4.122 202.690,5.266 205.897,6.401 208.250 C 7.540 210.614,12.997 216.444,16.333 218.863 C 24.073 224.474,32.086 227.116,40.333 226.776 C 46.915 226.505,51.722 224.359,58.813 218.528 C 60.510 217.132,60.961 216.854,62.579 216.206 C 67.954 214.051,69.575 212.418,69.581 209.154 C 69.584 206.969,68.857 205.443,66.739 203.193 C 65.071 201.421,65.106 201.507,64.247 197.056 C 63.318 192.244,62.843 191.178,59.559 186.554 C 56.817 182.691,56.043 181.947,51.000 178.326 C 49.212 177.043,47.494 175.780,47.180 175.520 L 46.611 175.046 49.380 169.482 C 56.728 154.712,67.777 136.136,72.118 131.250 C 75.737 127.178,83.021 122.000,90.102 118.467 C 94.154 116.445,95.519 115.825,105.064 111.668 C 107.619 110.555,110.792 109.128,112.114 108.497 C 113.661 107.758,114.538 107.421,114.576 107.550 C 114.609 107.660,114.761 108.875,114.914 110.250 C 115.068 111.625,115.374 114.325,115.595 116.250 C 116.754 126.339,117.113 135.206,116.538 139.500 C 115.483 147.365,114.257 151.213,110.875 157.269 C 109.959 158.908,108.834 161.000,108.374 161.917 C 107.324 164.010,107.194 164.135,104.391 165.730 C 99.618 168.445,96.642 170.667,92.466 174.632 C 91.117 175.912,89.457 177.379,88.775 177.893 C 86.461 179.634,86.019 180.289,82.775 186.780 C 79.583 193.165,78.450 196.144,77.828 199.779 C 77.465 201.904,77.365 206.000,77.676 206.000 C 78.051 206.000,79.855 204.619,81.922 202.748 C 84.665 200.267,86.065 199.204,86.134 199.550 C 86.162 199.689,85.839 201.125,85.417 202.741 C 83.304 210.818,84.577 218.486,89.750 228.833 C 91.053 231.439,91.630 232.845,93.018 236.792 C 93.509 238.190,93.988 239.331,94.081 239.328 C 94.350 239.320,95.261 238.017,96.183 236.320 C 97.072 234.683,97.661 233.772,97.763 233.875 C 97.797 233.908,97.939 234.981,98.080 236.259 C 98.690 241.796,98.795 242.075,102.395 247.740 C 105.180 252.124,109.022 255.694,112.919 257.520 C 116.620 259.254,119.988 259.312,127.092 257.763 C 128.554 257.444,130.575 257.101,131.583 257.002 C 132.592 256.902,136.004 256.453,139.167 256.005 C 142.329 255.556,145.329 255.139,145.833 255.077 C 146.337 255.015,148.212 254.671,150.000 254.313 C 151.787 253.955,154.375 253.514,155.750 253.333 C 159.697 252.814,172.575 249.585,179.417 247.399 C 182.061 246.554,184.173 245.954,188.250 244.891 C 191.339 244.085,206.879 238.800,209.750 237.579 C 212.487 236.415,213.960 235.851,224.748 231.831 C 227.498 230.806,231.323 229.293,233.248 228.468 C 239.013 225.997,240.233 225.530,247.750 222.924 C 249.675 222.256,252.750 221.146,254.583 220.457 C 259.032 218.785,262.553 217.655,269.565 215.650 C 272.783 214.730,276.982 213.494,278.896 212.903 C 283.480 211.489,283.959 211.373,290.583 210.081 C 303.649 207.533,322.368 202.259,332.833 198.177 C 334.987 197.337,337.802 196.242,339.088 195.743 C 345.369 193.309,352.276 189.355,363.295 181.889 C 365.978 180.071,368.940 178.097,369.877 177.502 C 370.814 176.908,372.845 175.492,374.390 174.356 C 378.282 171.494,379.407 170.818,384.833 168.081 C 392.899 164.013,394.712 162.562,396.706 158.583 C 400.190 151.631,399.617 139.794,395.496 133.583 C 394.827 132.575,394.075 131.405,393.826 130.984 L 393.372 130.218 395.978 131.248 C 400.604 133.077,400.398 133.193,399.076 129.499 C 397.797 125.924,397.126 123.655,396.513 120.832 C 394.306 110.671,390.231 103.423,384.286 99.083 C 383.030 98.167,381.758 97.165,381.459 96.858 L 380.917 96.299 386.273 96.415 C 392.490 96.549,392.234 96.629,390.946 94.949 C 387.639 90.634,383.316 87.846,372.940 83.340 C 369.027 81.640,368.673 81.570,362.750 81.302 C 353.774 80.896,349.281 81.073,344.690 82.014 C 342.456 82.471,342.546 82.494,340.208 80.875 C 337.404 78.932,336.399 77.972,335.054 75.947 C 333.551 73.684,330.477 70.615,326.417 67.324 C 324.675 65.912,322.500 64.077,321.583 63.247 C 319.021 60.925,317.898 60.079,313.667 57.287 C 311.512 55.865,308.925 54.083,307.917 53.327 C 303.961 50.362,300.717 48.375,293.500 44.501 C 288.255 41.684,285.030 39.889,283.728 39.060 C 282.116 38.033,279.516 36.682,276.051 35.071 C 271.703 33.050,269.395 31.895,267.724 30.905 C 262.716 27.937,231.877 13.836,225.250 11.484 C 217.604 8.770,206.255 5.826,195.500 3.766 C 185.642 1.878,183.914 1.637,176.917 1.169 C 174.075 0.979,171.150 0.742,170.417 0.644 C 166.491 0.117,147.216 -0.119,144.389 0.325 M171.500 3.989 C 172.004 4.092,173.842 4.241,175.583 4.319 C 178.336 4.444,179.142 4.550,181.750 5.126 C 183.400 5.491,185.350 5.880,186.083 5.992 C 192.915 7.034,209.447 11.066,214.523 12.930 C 215.931 13.447,219.371 14.642,222.167 15.585 C 224.963 16.529,228.000 17.600,228.917 17.966 C 231.820 19.126,240.461 23.174,251.750 28.663 C 253.675 29.599,256.563 30.966,258.167 31.702 C 259.771 32.437,261.983 33.512,263.083 34.090 C 264.183 34.669,266.808 35.864,268.917 36.747 C 275.417 39.468,278.028 40.848,280.750 43.000 C 282.458 44.351,284.058 45.299,288.374 47.518 C 293.099 49.947,295.198 51.276,297.173 53.089 C 298.943 54.714,300.091 55.520,302.750 57.001 C 303.942 57.665,305.442 58.579,306.083 59.032 C 306.725 59.485,308.188 60.480,309.333 61.243 C 312.242 63.180,313.805 64.555,318.583 69.378 C 320.875 71.691,323.614 74.408,324.670 75.417 C 326.607 77.266,329.308 80.415,330.206 81.873 C 330.474 82.308,331.252 83.178,331.934 83.807 C 332.701 84.513,333.141 85.039,333.085 85.184 C 332.828 85.848,330.049 87.079,324.417 89.022 C 319.346 90.771,317.247 91.827,311.917 95.306 C 298.219 104.248,286.511 109.850,266.944 116.824 C 264.912 117.548,261.188 118.887,258.667 119.800 C 248.919 123.331,247.577 123.678,237.250 125.341 C 230.180 126.479,227.786 126.936,224.167 127.838 C 220.201 128.826,215.988 129.809,204.917 132.331 C 187.234 136.357,183.264 137.349,173.920 140.070 C 166.845 142.131,166.087 142.388,162.926 143.791 C 158.219 145.879,146.290 150.049,139.986 151.809 C 138.665 152.178,136.196 152.867,134.500 153.340 C 128.736 154.946,123.876 156.902,119.218 159.490 C 115.342 161.644,115.468 161.705,117.002 158.417 C 121.823 148.088,123.234 137.438,121.328 125.750 C 121.059 124.100,120.685 121.250,120.496 119.417 C 120.186 116.408,119.917 114.645,118.835 108.522 C 118.283 105.399,118.232 105.566,120.042 104.555 C 120.890 104.080,124.186 102.304,127.366 100.606 C 135.824 96.093,138.982 94.218,143.251 91.179 C 146.318 88.995,147.011 88.778,152.053 88.424 C 156.121 88.138,157.134 87.884,160.083 86.414 C 167.049 82.940,179.500 73.158,179.500 71.159 C 179.500 70.700,172.928 73.956,170.260 75.737 C 164.798 79.381,158.555 82.203,154.359 82.923 C 152.175 83.297,152.190 83.179,154.682 80.333 C 160.016 74.242,162.602 70.378,164.724 65.325 C 165.322 63.899,166.154 62.030,166.573 61.170 C 167.497 59.271,167.612 55.790,166.756 55.615 C 166.579 55.579,163.186 61.053,161.145 64.667 C 158.453 69.433,158.250 69.715,155.328 72.735 C 153.812 74.302,151.644 76.708,150.510 78.083 C 147.512 81.719,145.771 83.372,143.135 85.088 C 140.332 86.912,139.491 87.481,134.574 90.881 C 130.303 93.834,126.314 96.314,124.000 97.453 C 123.221 97.837,121.496 98.666,120.167 99.296 C 118.837 99.926,116.438 101.194,114.833 102.115 C 111.003 104.314,110.118 104.749,105.939 106.493 C 92.934 111.920,83.309 117.202,74.500 123.745 C 70.415 126.779,68.607 128.793,63.944 135.500 C 63.147 136.646,61.741 138.483,60.820 139.583 C 58.644 142.181,57.698 143.784,55.659 148.339 C 53.702 152.706,52.859 154.333,50.430 158.417 C 48.430 161.779,47.086 164.458,45.913 167.417 C 44.963 169.814,44.435 170.768,43.995 170.883 C 43.556 170.998,43.555 171.007,44.404 167.568 C 45.273 164.050,45.880 161.088,46.915 155.316 C 47.971 149.428,48.582 146.364,49.337 143.167 C 49.695 141.654,50.368 138.392,50.834 135.917 C 51.853 130.499,52.126 129.315,53.079 126.173 C 54.411 121.779,54.885 118.878,55.665 110.333 C 56.491 101.292,57.290 97.105,58.983 92.936 C 64.407 79.581,70.857 66.070,75.062 59.250 C 76.080 57.600,77.438 55.337,78.081 54.221 C 79.340 52.036,79.596 51.736,86.003 44.917 C 87.898 42.900,90.221 40.387,91.164 39.333 C 92.108 38.279,93.751 36.448,94.815 35.265 C 100.505 28.936,113.946 17.582,117.458 16.137 C 118.209 15.827,124.801 15.655,125.462 15.928 C 126.855 16.502,126.880 16.430,124.567 18.432 C 119.414 22.891,118.217 23.835,115.005 25.972 C 111.554 28.268,109.719 29.796,108.791 31.145 L 108.282 31.885 108.849 31.774 C 109.825 31.581,112.987 29.925,115.365 28.360 C 116.620 27.534,118.532 26.335,119.615 25.695 C 122.237 24.147,123.811 23.009,128.407 19.337 C 130.532 17.639,132.895 15.764,133.657 15.171 C 134.420 14.578,135.915 13.154,136.980 12.008 C 144.247 4.185,143.935 4.335,152.945 4.332 C 155.002 4.332,156.861 4.254,157.222 4.154 C 158.868 3.697,169.466 3.575,171.500 3.989 M361.333 85.331 C 362.204 85.518,364.108 85.858,365.563 86.086 C 369.743 86.742,374.176 88.433,377.748 90.736 C 378.937 91.503,379.079 91.403,375.583 92.269 C 371.205 93.353,369.339 94.145,367.994 95.490 C 367.376 96.108,366.334 97.706,366.333 98.036 C 366.333 98.062,367.329 98.058,368.545 98.026 C 377.830 97.787,385.613 103.399,388.961 112.750 C 389.421 114.033,390.743 117.427,391.899 120.292 C 393.054 123.157,394.000 125.571,394.000 125.657 C 394.000 125.742,393.344 125.588,392.542 125.315 C 387.941 123.745,383.398 122.782,380.995 122.868 L 379.629 122.917 380.273 123.623 C 380.631 124.016,381.546 124.672,382.333 125.100 C 385.820 126.995,390.240 131.661,391.927 135.230 C 396.142 144.141,393.847 158.266,387.689 161.323 C 381.156 164.566,375.811 167.883,371.441 171.405 C 367.232 174.797,353.632 183.497,347.750 186.561 C 341.280 189.931,339.688 190.715,336.750 191.982 C 335.192 192.653,332.492 193.901,330.750 194.755 C 326.720 196.729,325.445 197.194,318.833 199.099 C 315.854 199.957,312.217 201.039,310.750 201.502 C 305.938 203.024,299.868 204.411,289.667 206.321 C 283.237 207.524,256.880 215.498,250.081 218.297 C 248.521 218.939,244.546 220.379,241.247 221.498 C 230.562 225.121,229.062 225.698,223.583 228.295 C 221.842 229.120,219.442 230.154,218.250 230.591 C 217.058 231.029,213.383 232.470,210.083 233.793 C 203.414 236.468,200.226 237.574,197.250 238.244 C 193.958 238.986,191.379 239.749,187.959 240.993 C 176.910 245.013,157.378 249.851,146.202 251.336 C 144.800 251.522,143.126 251.785,142.481 251.921 C 141.837 252.056,141.136 252.123,140.923 252.070 C 140.710 252.017,139.898 252.093,139.118 252.239 C 138.141 252.422,137.268 252.473,136.308 252.403 C 135.147 252.319,134.489 252.388,132.333 252.817 C 130.355 253.211,129.301 253.332,127.833 253.334 C 126.779 253.335,125.204 253.454,124.333 253.599 C 119.174 254.456,115.915 253.688,111.861 250.660 C 109.530 248.920,105.954 244.960,104.825 242.871 C 104.591 242.438,104.202 241.746,103.961 241.333 C 103.412 240.392,102.063 236.951,101.790 235.790 C 101.500 234.562,101.559 230.139,101.894 228.012 C 102.044 227.057,102.167 225.985,102.167 225.630 C 102.167 225.026,103.019 222.476,103.659 221.167 C 103.939 220.594,103.846 219.167,103.529 219.167 C 102.785 219.167,97.825 225.145,95.578 228.749 C 94.306 230.791,94.567 231.138,92.694 224.917 C 91.866 222.167,90.813 218.829,90.353 217.500 C 89.289 214.423,89.062 213.499,88.826 211.279 C 88.064 204.104,91.642 196.124,97.303 192.373 C 98.833 191.359,98.836 191.325,97.412 190.825 C 94.933 189.954,92.911 190.280,88.710 192.227 C 86.526 193.239,84.840 193.895,84.723 193.779 C 84.693 193.749,84.973 192.943,85.345 191.987 C 86.849 188.124,88.948 184.536,91.141 182.083 C 91.796 181.350,92.914 180.075,93.624 179.250 C 96.354 176.078,97.195 175.313,99.199 174.179 C 100.235 173.592,102.283 172.400,103.750 171.529 C 105.217 170.659,107.017 169.669,107.750 169.330 C 110.535 168.042,112.115 167.352,113.038 167.019 C 113.563 166.829,114.613 166.362,115.371 165.980 C 116.130 165.598,118.362 164.664,120.333 163.904 C 122.304 163.145,124.742 162.175,125.750 161.749 C 128.918 160.410,132.978 158.888,141.750 155.751 C 151.567 152.240,155.201 150.853,157.853 149.605 C 160.639 148.294,164.198 146.966,167.766 145.907 C 169.499 145.393,173.504 144.121,176.667 143.081 C 183.329 140.888,184.997 140.394,188.417 139.602 C 189.792 139.283,196.204 137.746,202.667 136.187 C 223.175 131.237,231.535 129.443,242.415 127.659 C 249.543 126.490,258.196 123.748,275.417 117.201 C 287.272 112.694,301.742 105.970,309.750 101.248 C 321.033 94.595,329.466 90.768,336.750 88.996 C 338.217 88.639,339.979 88.153,340.667 87.914 C 342.376 87.322,345.481 86.593,348.083 86.173 C 349.275 85.980,351.600 85.605,353.250 85.338 C 356.732 84.775,358.740 84.773,361.333 85.331 M365.542 106.496 C 364.254 108.339,364.200 108.075,366.125 109.330 C 371.047 112.537,373.150 116.709,373.645 124.250 C 373.717 125.350,373.752 126.281,373.722 126.318 C 373.693 126.356,372.571 125.650,371.228 124.750 C 367.870 122.498,363.926 120.518,363.550 120.894 C 363.404 121.041,364.511 122.811,365.883 124.622 C 368.527 128.113,368.959 130.190,368.648 137.917 C 368.424 143.490,368.081 144.699,365.733 148.191 C 364.075 150.659,364.018 150.645,362.977 147.500 C 361.994 144.529,361.280 143.499,359.630 142.674 C 357.926 141.823,357.984 141.534,358.494 148.333 C 358.871 153.342,357.483 157.794,354.183 162.167 C 351.947 165.130,347.675 169.874,345.734 171.550 C 342.859 174.033,341.853 175.253,341.335 176.886 C 341.033 177.838,341.135 177.807,343.275 176.284 C 347.205 173.488,348.926 171.935,351.253 169.083 C 352.301 167.800,353.761 166.037,354.499 165.167 C 357.743 161.337,358.912 159.106,360.165 154.345 C 361.200 150.413,361.095 150.585,361.732 151.773 C 362.628 153.444,364.171 155.405,364.393 155.155 C 366.801 152.425,369.565 148.530,370.154 147.034 C 371.425 143.804,372.105 134.015,371.389 129.250 L 371.289 128.583 372.603 129.837 C 373.871 131.047,374.973 131.736,375.837 131.858 C 376.427 131.942,376.703 129.799,376.603 125.917 C 376.458 120.323,374.933 115.221,372.095 110.833 C 371.542 109.979,366.797 104.949,366.595 105.003 C 366.589 105.005,366.115 105.677,365.542 106.496 M33.138 175.172 C 34.773 175.339,36.326 175.690,37.833 176.231 C 38.246 176.379,39.285 176.727,40.143 177.003 C 48.638 179.741,55.807 185.273,58.149 190.900 C 59.368 193.829,61.449 203.940,60.938 204.451 C 60.887 204.501,58.462 204.455,55.548 204.348 C 48.253 204.080,46.095 203.751,42.488 202.357 C 40.851 201.725,36.965 200.432,30.948 198.517 C 26.091 196.972,10.000 189.455,10.000 188.732 C 10.000 188.586,10.297 187.831,10.661 187.056 C 14.362 179.158,23.728 174.206,33.138 175.172 M5.182 187.364 C 5.712 187.641,6.956 188.642,8.066 189.686 L 10.018 191.520 16.329 194.658 C 22.767 197.859,25.428 199.010,28.839 200.067 C 29.896 200.394,32.258 201.232,34.089 201.929 C 43.961 205.686,45.408 206.091,51.877 206.914 C 57.399 207.617,60.711 207.471,63.695 206.395 C 65.954 205.580,67.734 208.542,66.237 210.623 C 65.307 211.915,61.348 213.254,58.500 213.239 C 51.191 213.200,24.275 205.416,15.750 200.876 C 4.864 195.078,2.068 192.752,1.873 189.332 C 1.728 186.791,2.833 186.134,5.182 187.364 M9.015 199.940 C 16.668 204.528,22.128 206.605,41.167 212.169 C 43.413 212.825,45.325 213.422,45.417 213.494 C 45.508 213.567,46.033 213.754,46.583 213.911 C 47.133 214.067,48.633 214.518,49.917 214.913 C 51.200 215.308,52.700 215.726,53.250 215.842 C 53.800 215.958,54.325 216.122,54.417 216.207 C 54.665 216.436,53.208 217.690,51.436 218.772 C 50.600 219.282,49.467 219.981,48.917 220.324 C 44.020 223.378,33.042 223.459,25.575 220.497 C 16.890 217.052,6.333 205.104,6.333 198.719 C 6.333 198.358,6.512 198.440,9.015 199.940 "
                      stroke="none" fill="#050404" fillRule="evenodd" />
                <path id="path2"
                      d="M356.788 84.954 C 357.084 84.990,357.609 84.991,357.955 84.955 C 358.300 84.919,358.058 84.889,357.417 84.888 C 356.775 84.887,356.492 84.917,356.788 84.954 M383.750 104.333 C 384.294 104.883,384.777 105.333,384.823 105.333 C 384.869 105.333,384.461 104.883,383.917 104.333 C 383.372 103.783,382.890 103.333,382.844 103.333 C 382.798 103.333,383.206 103.783,383.750 104.333 M367.993 106.375 C 368.684 107.111,368.833 107.243,368.833 107.118 C 368.833 107.091,368.477 106.735,368.042 106.326 L 367.250 105.583 367.993 106.375 M380.958 122.784 C 381.165 122.824,381.502 122.824,381.708 122.784 C 381.915 122.745,381.746 122.712,381.333 122.712 C 380.921 122.712,380.752 122.745,380.958 122.784 M376.727 126.667 C 376.727 127.537,376.755 127.894,376.789 127.458 C 376.824 127.023,376.824 126.310,376.789 125.875 C 376.755 125.440,376.727 125.796,376.727 126.667 M371.730 135.667 C 371.730 136.721,371.757 137.152,371.790 136.625 C 371.823 136.098,371.823 135.235,371.790 134.708 C 371.757 134.181,371.730 134.612,371.730 135.667 M368.539 137.833 C 368.539 138.154,368.573 138.285,368.615 138.125 C 368.657 137.965,368.657 137.702,368.615 137.542 C 368.573 137.381,368.539 137.512,368.539 137.833 M358.048 142.917 C 358.049 143.375,358.081 143.543,358.120 143.289 C 358.158 143.036,358.157 142.661,358.117 142.456 C 358.078 142.251,358.046 142.458,358.048 142.917 M363.786 154.837 C 364.081 155.146,364.351 155.366,364.385 155.325 C 364.420 155.284,364.179 155.030,363.849 154.762 L 363.250 154.274 363.786 154.837 M28.417 175.191 C 20.807 176.032,13.954 180.559,10.838 186.804 C 9.705 189.074,8.972 188.496,19.500 193.635 C 26.494 197.048,26.520 197.058,36.333 200.169 C 38.121 200.735,40.558 201.575,41.750 202.035 C 44.747 203.192,50.314 204.439,50.810 204.064 C 50.968 203.945,51.320 200.030,51.326 198.313 C 51.342 193.982,49.992 189.710,47.488 186.167 C 46.179 184.316,38.452 176.610,37.491 176.199 C 36.228 175.657,34.347 175.300,32.266 175.207 L 30.282 175.119 30.384 175.601 C 31.126 179.125,32.329 184.551,32.379 184.601 C 32.414 184.636,34.912 185.009,37.930 185.428 C 40.948 185.847,43.529 186.233,43.667 186.286 C 44.045 186.431,42.910 186.636,37.459 187.407 C 34.733 187.793,32.455 188.156,32.397 188.214 C 32.340 188.271,31.934 189.991,31.496 192.034 C 31.059 194.078,30.591 196.162,30.458 196.667 L 30.216 197.583 30.034 196.917 C 29.617 195.387,29.165 193.428,28.654 190.942 C 28.001 187.768,28.623 188.167,23.167 187.424 C 17.306 186.626,16.307 186.471,16.407 186.371 C 16.454 186.324,19.037 185.930,22.147 185.496 C 28.452 184.615,28.087 184.707,28.217 183.962 C 28.351 183.196,29.990 175.646,30.099 175.292 C 30.155 175.111,30.105 175.008,29.970 175.022 C 29.849 175.034,29.150 175.110,28.417 175.191 M92.242 180.875 L 91.583 181.583 92.292 180.925 C 92.681 180.562,93.000 180.243,93.000 180.216 C 93.000 180.090,92.855 180.216,92.242 180.875 M2.482 187.144 C 1.675 187.781,1.726 190.568,2.569 191.842 C 3.694 193.542,7.691 196.451,12.417 199.010 C 13.975 199.853,15.925 200.914,16.750 201.367 C 20.683 203.524,41.642 210.327,46.685 211.082 L 47.417 211.192 48.026 210.138 C 49.458 207.658,49.873 206.667,49.481 206.667 C 47.594 206.667,42.516 205.187,36.325 202.832 C 33.708 201.837,30.108 200.540,28.325 199.950 C 24.302 198.618,22.202 197.692,15.266 194.187 L 9.782 191.417 7.812 189.559 C 5.156 187.054,3.530 186.317,2.482 187.144 M6.500 199.126 C 6.500 201.684,8.392 205.540,11.412 209.139 C 14.810 213.189,21.403 218.911,23.044 219.235 C 31.965 220.996,38.472 219.537,44.384 214.450 C 44.916 213.993,45.291 213.560,45.217 213.489 C 45.144 213.418,41.821 212.412,37.833 211.253 C 23.218 207.006,15.871 204.167,9.583 200.340 C 8.483 199.670,7.340 198.976,7.042 198.797 L 6.500 198.473 6.500 199.126 M102.073 220.375 L 101.583 220.917 102.125 220.427 C 102.423 220.158,102.667 219.914,102.667 219.885 C 102.667 219.757,102.529 219.870,102.073 220.375 M101.556 232.667 C 101.556 233.354,101.585 233.635,101.621 233.292 C 101.657 232.948,101.657 232.385,101.621 232.042 C 101.585 231.698,101.556 231.979,101.556 232.667 M108.667 247.885 C 108.667 247.914,108.910 248.158,109.208 248.427 L 109.750 248.917 109.260 248.375 C 108.804 247.870,108.667 247.757,108.667 247.885 M137.127 252.451 C 137.334 252.491,137.634 252.490,137.794 252.448 C 137.953 252.406,137.783 252.374,137.417 252.375 C 137.050 252.377,136.920 252.411,137.127 252.451 "
                      stroke="none" fill="#fcdc7c" fillRule="evenodd" />
                <path id="path3"
                      d="M386.250 128.167 C 386.701 128.625,387.108 129.000,387.154 129.000 C 387.200 129.000,386.868 128.625,386.417 128.167 C 385.965 127.708,385.558 127.333,385.513 127.333 C 385.467 127.333,385.799 127.708,386.250 128.167 M372.500 129.917 C 372.811 130.237,373.103 130.500,373.149 130.500 C 373.195 130.500,372.978 130.237,372.667 129.917 C 372.356 129.596,372.064 129.333,372.018 129.333 C 371.972 129.333,372.189 129.596,372.500 129.917 M388.583 130.500 C 388.941 130.867,389.272 131.167,389.318 131.167 C 389.363 131.167,389.108 130.867,388.750 130.500 C 388.392 130.133,388.062 129.833,388.016 129.833 C 387.970 129.833,388.225 130.133,388.583 130.500 M368.720 134.167 C 368.720 134.762,368.750 135.006,368.787 134.708 C 368.824 134.410,368.824 133.923,368.787 133.625 C 368.750 133.327,368.720 133.571,368.720 134.167 M368.545 139.000 C 368.545 139.412,368.578 139.581,368.618 139.375 C 368.657 139.169,368.657 138.831,368.618 138.625 C 368.578 138.419,368.545 138.587,368.545 139.000 M394.055 146.250 C 394.055 146.892,394.086 147.134,394.122 146.788 C 394.158 146.442,394.157 145.917,394.120 145.621 C 394.083 145.325,394.054 145.608,394.055 146.250 M358.545 150.333 C 358.545 150.746,358.578 150.915,358.618 150.708 C 358.657 150.502,358.657 150.165,358.618 149.958 C 358.578 149.752,358.545 149.921,358.545 150.333 M30.625 175.121 C 30.923 175.158,31.410 175.158,31.708 175.121 C 32.006 175.084,31.762 175.053,31.167 175.053 C 30.571 175.053,30.327 175.084,30.625 175.121 M40.279 178.568 C 41.366 179.705,43.099 181.438,44.130 182.419 C 49.942 187.949,52.067 193.977,51.090 202.167 C 50.965 203.221,50.883 204.105,50.909 204.131 C 51.003 204.226,60.849 204.540,60.938 204.451 C 61.229 204.160,59.910 196.441,59.083 193.593 C 57.703 188.844,54.673 184.777,50.413 181.956 C 47.789 180.218,39.672 176.500,38.502 176.500 C 38.392 176.500,39.192 177.430,40.279 178.568 M14.328 181.792 L 13.417 182.750 14.375 181.839 C 14.902 181.338,15.333 180.907,15.333 180.881 C 15.333 180.757,15.174 180.901,14.328 181.792 M8.167 189.917 C 8.757 190.512,9.278 191.000,9.324 191.000 C 9.370 191.000,8.924 190.512,8.333 189.917 C 7.743 189.321,7.222 188.833,7.176 188.833 C 7.130 188.833,7.576 189.321,8.167 189.917 M63.553 206.427 C 60.942 207.411,57.216 207.606,52.583 207.000 C 51.208 206.820,50.028 206.672,49.960 206.670 C 49.893 206.668,49.567 207.210,49.236 207.875 C 48.215 209.927,47.442 211.166,47.174 211.184 C 46.800 211.209,47.598 211.394,52.250 212.361 C 58.763 213.716,60.853 213.600,64.724 211.672 C 66.621 210.727,67.196 209.199,66.330 207.410 C 65.671 206.049,65.095 205.845,63.553 206.427 M88.721 209.417 C 88.722 210.058,88.752 210.300,88.788 209.955 C 88.824 209.609,88.824 209.084,88.787 208.788 C 88.750 208.492,88.721 208.775,88.721 209.417 M13.417 211.500 C 13.775 211.867,14.105 212.167,14.151 212.167 C 14.197 212.167,13.941 211.867,13.583 211.500 C 13.225 211.133,12.895 210.833,12.849 210.833 C 12.803 210.833,13.059 211.133,13.417 211.500 M15.917 214.000 C 16.275 214.367,16.605 214.667,16.651 214.667 C 16.697 214.667,16.441 214.367,16.083 214.000 C 15.725 213.633,15.395 213.333,15.349 213.333 C 15.303 213.333,15.559 213.633,15.917 214.000 M45.218 213.442 C 45.286 213.556,44.942 213.970,44.375 214.458 C 39.125 218.975,33.093 220.716,26.275 219.683 C 25.006 219.491,23.768 219.336,23.525 219.340 L 23.083 219.347 23.579 219.615 C 30.455 223.336,43.502 223.701,48.917 220.324 C 49.467 219.981,50.600 219.282,51.436 218.772 C 53.208 217.690,54.665 216.436,54.417 216.207 C 54.325 216.122,53.800 215.958,53.250 215.842 C 52.700 215.726,51.200 215.308,49.917 214.913 C 48.633 214.518,47.133 214.067,46.583 213.911 C 46.033 213.754,45.475 213.542,45.343 213.438 C 45.163 213.297,45.132 213.298,45.218 213.442 M100.909 221.542 L 100.250 222.250 100.958 221.591 C 101.617 220.978,101.743 220.833,101.617 220.833 C 101.590 220.833,101.271 221.152,100.909 221.542 "
                      stroke="none" fill="#efc456" fillRule="evenodd" />
                <path id="path4"
                      d="M353.833 85.348 C 352.779 85.519,350.454 85.892,348.667 86.178 C 345.325 86.711,341.783 87.535,340.167 88.154 C 339.662 88.347,338.395 88.697,337.350 88.933 C 331.349 90.286,324.075 93.324,315.750 97.956 C 314.283 98.772,312.596 99.709,312.000 100.039 C 311.404 100.369,309.754 101.323,308.333 102.160 C 301.917 105.940,286.330 113.115,275.917 117.084 C 256.877 124.339,249.775 126.555,240.917 128.004 C 231.318 129.575,222.008 131.586,202.667 136.269 C 198.313 137.323,192.688 138.673,190.167 139.269 C 184.596 140.585,183.435 140.918,177.728 142.838 C 175.265 143.667,171.832 144.762,170.098 145.271 C 165.698 146.562,161.981 147.863,159.338 149.035 C 153.879 151.457,151.847 152.239,140.652 156.227 C 132.606 159.093,128.874 160.502,124.917 162.167 C 123.450 162.784,121.087 163.722,119.667 164.252 C 118.246 164.781,116.425 165.543,115.620 165.945 C 114.816 166.346,113.428 166.965,112.537 167.319 C 108.948 168.748,106.915 169.720,104.666 171.084 C 103.838 171.586,102.019 172.646,100.622 173.440 C 97.139 175.421,96.738 175.739,94.712 178.144 C 93.736 179.302,92.439 180.775,91.829 181.417 C 89.140 184.248,86.960 187.905,85.232 192.484 C 84.657 194.008,84.721 194.003,88.550 192.225 C 92.886 190.213,94.754 189.871,97.167 190.649 C 99.080 191.266,99.078 191.301,97.094 192.581 C 93.863 194.665,90.742 199.300,89.580 203.739 C 88.309 208.594,88.537 211.851,90.574 217.917 C 91.158 219.658,92.215 223.033,92.923 225.417 C 94.519 230.794,94.387 230.635,95.584 228.617 C 97.855 224.788,103.290 218.499,103.698 219.228 C 104.058 219.872,103.884 220.917,103.101 222.804 C 102.441 224.396,102.293 224.957,102.159 226.387 C 102.071 227.320,101.927 228.608,101.838 229.250 C 101.262 233.431,101.962 237.507,103.857 241.000 C 104.949 243.014,105.453 243.776,106.774 245.411 C 112.118 252.028,117.515 254.843,122.750 253.743 C 123.392 253.608,125.379 253.426,127.167 253.338 C 129.466 253.225,130.831 253.076,131.833 252.826 C 132.789 252.589,134.225 252.422,136.250 252.315 C 144.382 251.884,154.881 250.124,166.081 247.315 C 173.716 245.400,183.944 242.404,188.167 240.846 C 191.703 239.541,193.311 239.059,196.583 238.322 C 199.899 237.575,203.376 236.410,208.569 234.307 C 211.052 233.301,214.733 231.855,216.750 231.094 C 218.767 230.333,222.179 228.884,224.333 227.875 C 229.094 225.645,231.295 224.794,239.250 222.109 C 246.148 219.781,248.697 218.854,251.500 217.656 C 253.275 216.897,261.961 214.105,273.833 210.479 C 281.616 208.102,285.447 207.052,288.368 206.497 C 300.428 204.205,306.598 202.782,311.786 201.099 C 313.364 200.587,316.514 199.649,318.786 199.015 C 325.102 197.252,327.724 196.304,330.652 194.725 C 331.422 194.310,334.010 193.108,336.402 192.056 C 338.793 191.003,341.537 189.726,342.500 189.216 C 343.462 188.707,345.938 187.414,348.000 186.342 C 353.514 183.476,367.908 174.269,371.167 171.525 C 374.827 168.441,379.548 165.457,386.274 161.975 L 389.490 160.310 390.226 159.197 C 395.335 151.465,395.235 138.988,390.007 132.133 C 388.264 129.846,383.086 125.167,382.299 125.167 C 381.682 125.167,379.667 123.334,379.667 122.772 C 379.667 122.084,386.239 123.241,391.208 124.803 C 392.652 125.257,393.833 125.569,393.833 125.497 C 393.833 125.315,392.591 122.145,391.124 118.583 C 390.444 116.933,389.532 114.571,389.098 113.333 C 385.682 103.608,378.372 98.121,368.809 98.104 L 366.201 98.099 366.351 97.704 C 367.306 95.191,369.752 93.683,375.083 92.319 C 376.917 91.850,378.444 91.441,378.478 91.408 C 378.606 91.286,376.333 89.950,374.250 88.922 C 371.497 87.564,368.989 86.735,366.340 86.307 C 365.190 86.122,363.108 85.752,361.713 85.485 C 358.713 84.911,356.745 84.877,353.833 85.348 M369.013 107.254 C 372.308 110.571,373.830 113.005,375.227 117.191 C 376.731 121.692,377.206 127.584,376.386 131.558 C 376.200 132.460,374.361 131.697,372.615 129.993 L 371.481 128.885 371.615 131.068 C 372.052 138.141,371.380 144.657,369.892 147.795 C 369.343 148.953,367.969 150.876,365.861 153.435 C 365.324 154.087,364.756 154.799,364.599 155.018 L 364.313 155.417 363.637 154.667 C 362.826 153.767,362.195 152.863,361.623 151.782 L 361.199 150.980 361.023 151.532 C 360.927 151.835,360.615 152.983,360.330 154.083 C 358.955 159.397,358.077 161.019,353.845 166.074 C 352.690 167.454,351.357 169.071,350.885 169.667 C 349.250 171.726,347.085 173.640,343.449 176.236 C 340.944 178.025,340.926 178.031,341.190 177.074 C 341.659 175.370,342.667 174.090,345.333 171.814 C 349.160 168.547,354.836 161.680,356.545 158.250 C 358.400 154.527,358.727 152.109,358.235 145.735 C 357.923 141.691,357.897 141.765,359.378 142.457 C 361.266 143.341,362.093 144.491,363.156 147.706 C 363.451 148.598,363.826 149.494,363.990 149.696 L 364.288 150.064 365.138 148.907 C 368.238 144.686,368.700 142.666,368.582 133.833 C 368.518 129.005,368.102 127.678,365.607 124.338 C 364.155 122.393,363.228 120.883,363.389 120.722 C 363.761 120.350,367.758 122.346,371.070 124.556 L 373.667 126.289 373.667 125.770 C 373.664 118.084,371.281 112.874,366.226 109.502 C 365.231 108.839,364.390 108.272,364.358 108.242 C 364.315 108.203,366.514 104.857,366.596 104.837 C 366.604 104.835,367.691 105.922,369.013 107.254 M30.107 175.333 C 30.007 175.581,28.401 182.911,28.217 183.962 C 28.087 184.707,28.452 184.615,22.147 185.496 C 19.037 185.930,16.454 186.324,16.407 186.371 C 16.307 186.471,17.306 186.626,23.167 187.424 C 28.623 188.167,28.001 187.768,28.654 190.942 C 29.165 193.428,29.617 195.387,30.034 196.917 L 30.216 197.583 30.458 196.667 C 30.591 196.162,31.059 194.078,31.496 192.034 C 31.934 189.991,32.340 188.271,32.397 188.214 C 32.455 188.156,34.733 187.793,37.459 187.407 C 42.910 186.636,44.045 186.431,43.667 186.286 C 43.529 186.233,40.948 185.847,37.930 185.428 C 34.912 185.009,32.414 184.636,32.379 184.601 C 32.343 184.566,31.913 182.672,31.423 180.393 C 30.354 175.425,30.243 175.000,30.107 175.333 "
                      stroke="none" fill="#fcfcfc" fillRule="evenodd" />
            </g>
        )
    }
}