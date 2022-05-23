interface Props {
  className?: string;
}

const Helmet: React.FC<Props> = ({ className }) => (
  <svg
    width="24"
    height="22"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M15.0697 17.0245C15.1092 17.1079 15.1368 17.1714 15.1645 17.235C15.4173 17.8187 15.3817 18.3667 14.9828 18.8829C14.6273 19.3395 14.1809 19.681 13.6871 19.9669C12.8695 20.4435 11.9847 20.7532 11.0603 20.9279C10.4955 21.0351 9.92666 21.0033 9.35785 20.9716C7.89237 20.8882 6.54539 20.4037 5.27346 19.7049C4.23459 19.137 3.21942 18.5215 2.19635 17.9259C2.04625 17.8386 1.95935 17.7115 1.96725 17.5368C1.98305 17.0364 1.80134 16.5917 1.58014 16.1589C1.24043 15.4997 0.916526 14.8326 0.64792 14.1377C0.185761 12.9464 -0.0472938 11.7115 0.0080073 10.4249C0.114659 7.92326 0.975777 5.71942 2.57556 3.80942C3.70133 2.46726 5.08386 1.47851 6.69549 0.803463C7.72646 0.374608 8.79694 0.104588 9.90296 0.0251699C11.0366 -0.0542478 12.1545 0.0489952 13.2447 0.410346C14.2915 0.755812 15.2948 1.1807 16.2191 1.78427C17.5424 2.65389 18.6642 3.73 19.4977 5.09202C19.79 5.56852 20.0073 6.08474 20.2087 6.60492C20.2285 6.65654 20.2798 6.70817 20.3312 6.73199C20.6037 6.86303 20.8802 6.9901 21.1528 7.1132C21.2989 7.1807 21.3819 7.28394 21.3819 7.45072C21.3819 7.78825 21.3819 8.1218 21.3779 8.45933C21.374 8.63007 21.2871 8.75317 21.1251 8.80082C20.9 8.86833 20.6709 8.9398 20.4378 8.97157C19.7584 9.05893 19.079 9.11849 18.3996 9.19791C17.6372 9.28924 16.8827 9.41234 16.1678 9.70618C15.7412 9.8809 15.3422 10.1072 14.9907 10.417C14.8761 10.5162 14.8327 10.6115 14.888 10.7704C15.0223 11.1635 15.1329 11.5646 15.2514 11.9656C15.2751 12.045 15.3067 12.0649 15.3896 12.0649C16.5509 12.0212 17.7083 11.9656 18.8696 11.9497C19.5451 11.9418 20.2245 11.9855 20.9 12.0371C21.4885 12.0808 22.0771 12.1721 22.6341 12.3905C22.8197 12.462 23.0014 12.5573 23.1594 12.6804C23.4991 12.9425 23.5189 13.3515 23.2226 13.6652C23.1713 13.7207 23.1555 13.7684 23.1792 13.8399C23.2147 13.9511 23.2463 14.0662 23.27 14.1853C23.2977 14.3323 23.3727 14.4077 23.5228 14.4474C23.7677 14.507 23.9415 14.6658 24.0087 14.916C24.0679 15.1264 24.0205 15.3131 23.8507 15.4521C23.7598 15.5275 23.6571 15.5871 23.5465 15.6307C23.4754 15.6585 23.4478 15.6982 23.4399 15.7658C23.4241 15.9444 23.4043 16.1231 23.3964 16.2978C23.3648 17.092 23.3411 17.8902 23.3056 18.6843C23.2898 19.0298 23.2661 19.3753 23.2463 19.7247C23.2305 20.0305 23.0844 20.2211 22.7842 20.3124C22.3576 20.4395 21.927 20.5189 21.4846 20.5189C20.979 20.5189 20.4694 20.5427 19.9678 20.499C18.9447 20.4117 17.9848 20.1099 17.1316 19.5103C16.9223 19.3634 16.7761 19.1569 16.6576 18.9345C16.3811 18.4024 16.1164 17.8624 15.8478 17.3263C15.832 17.2945 15.8162 17.2628 15.8004 17.227C15.6582 16.953 15.6345 16.9411 15.3304 16.9808C15.2395 16.9928 15.1645 17.0086 15.0697 17.0245ZM9.93851 14.3879C9.93851 13.8041 9.77261 13.2045 9.45265 12.728C8.82064 11.7869 7.94372 11.2429 6.814 11.1198C6.13063 11.0444 5.47492 11.1436 4.85476 11.4415C4.15559 11.775 3.68158 12.3071 3.49988 13.0735C3.36163 13.6612 3.42088 14.2449 3.59468 14.8167C3.81588 15.5434 4.25039 16.1271 4.81131 16.6235C5.75142 17.4613 6.82585 17.6678 8.00692 17.2628C9.24329 16.826 9.94246 15.5354 9.93851 14.3879ZM22.1403 17.5804C22.1561 17.2945 22.1759 16.8299 22.1996 16.3654C22.2075 16.2145 22.2114 16.2105 22.0653 16.2264C21.686 16.2661 21.3068 16.3098 20.9276 16.3534C20.0942 16.4487 19.2607 16.544 18.4312 16.6433C17.9769 16.6989 17.5266 16.7664 17.0724 16.8299C16.9223 16.8498 16.9183 16.8657 16.9815 17.0086C17.1158 17.3104 17.2501 17.6122 17.3884 17.91C17.5424 18.2515 17.7557 18.5374 18.0954 18.7201C19.0276 19.2164 20.0191 19.4626 21.0698 19.4507C21.37 19.4468 21.6702 19.3951 21.9705 19.3634C22.0692 19.3515 22.0929 19.2959 22.0969 19.2006C22.1008 18.7201 22.1206 18.2396 22.1403 17.5804ZM21.7887 12.9941C21.7887 12.9822 21.7887 12.9702 21.7887 12.9583C21.7571 12.9504 21.7295 12.9345 21.6979 12.9305C21.2989 12.8789 20.9039 12.8074 20.505 12.7876C19.7545 12.7558 19.0039 12.7439 18.2574 12.7519C17.3963 12.7598 16.5351 12.7916 15.674 12.8154C15.5437 12.8194 15.5358 12.8352 15.5713 12.9583C15.674 13.2998 15.7846 13.6374 15.8873 13.9789C15.911 14.0622 15.9584 14.0821 16.0414 14.0662C16.1559 14.0424 16.2705 14.0344 16.3811 14.0146C17.1869 13.8915 17.9967 13.7843 18.7985 13.6413C19.6281 13.4904 20.4536 13.3078 21.2792 13.1331C21.453 13.1013 21.6189 13.0417 21.7887 12.9941ZM22.1956 14.9279C22.1403 14.7095 22.085 14.5149 22.0376 14.3203C22.0139 14.225 21.9665 14.1973 21.8678 14.2211C21.3108 14.3521 20.7538 14.4832 20.1969 14.5983C19.6834 14.7055 19.1659 14.8008 18.6445 14.8842C17.9651 14.9994 17.2817 15.0947 16.5983 15.2019C16.2942 15.2495 16.2744 15.3091 16.4561 15.5672C16.4917 15.6188 16.5312 15.6387 16.5983 15.6307C17.0013 15.5831 17.4081 15.5434 17.815 15.4957C18.6721 15.3965 19.5254 15.2972 20.3825 15.1939C20.9553 15.1264 21.5241 15.051 22.0929 14.9795C22.1245 14.9795 22.1561 14.9517 22.1956 14.9279ZM10.9813 16.556C10.9813 17.1278 11.4119 17.5765 11.9768 17.5804C12.5377 17.5844 12.9919 17.1357 12.9959 16.5758C12.9998 16.0159 12.5456 15.5632 11.9847 15.5632C11.4356 15.5553 10.9853 16.004 10.9813 16.556ZM14.647 14.1853C14.6589 13.9947 14.169 12.454 14.0663 12.327C14.0624 12.3389 14.0505 12.3508 14.0505 12.3627C14.011 12.871 14.0268 13.3793 14.0861 13.8836C14.09 13.9074 14.1058 13.9391 14.1216 13.9471C14.2915 14.0265 14.4614 14.102 14.647 14.1853ZM14.4416 15.3647C14.5009 15.5196 14.5404 15.6506 14.5957 15.7697C14.6115 15.8015 14.6747 15.8293 14.7181 15.8293C14.8248 15.8293 14.9354 15.8213 15.042 15.8094C15.2356 15.7816 15.2356 15.7777 15.1724 15.595C15.0934 15.3647 15.0934 15.3647 14.8485 15.3687C14.726 15.3647 14.5996 15.3647 14.4416 15.3647Z"
      fill="#34D4AA"
    />
    <path
      d="M4.7205 13.9512C4.64545 13.3516 4.97331 12.9545 5.41177 12.6369C5.69617 12.4304 6.04773 12.3788 6.39139 12.3946C7.09845 12.4264 7.63961 12.7441 7.96747 13.3913C8.31113 14.0743 8.13337 15.3569 7.17745 15.8096C7.0866 15.8533 6.9839 15.8771 6.88515 15.889C5.98058 16.0002 5.38017 15.5435 4.92986 14.8129C4.76 14.5548 4.67705 14.2689 4.7205 13.9512Z"
      fill="#34D4AA"
    />
  </svg>
);

export default Helmet;