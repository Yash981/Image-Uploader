interface Props{
    theme:string | undefined,
    mounted:boolean,
}
export default function LogoCustomize({ theme, mounted }:Props) {
    return (
        <svg width="120" height="26" viewBox="0 0 120 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z" fill="#9DC4F8"/>
<path d="M6 6C6 4.89543 6.89543 4 8 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H8C6.89543 20 6 19.1046 6 18V6Z" fill="#3662E3"/>
<path d="M10.2927 14.707C10.3855 14.7999 10.4957 14.8736 10.617 14.9238C10.7384 14.9741 10.8684 15 10.9997 15C11.131 15 11.2611 14.9741 11.3824 14.9238C11.5037 14.8736 11.6139 14.7999 11.7067 14.707L12.9997 13.4141L12.9997 25C12.9997 25.2652 13.105 25.5196 13.2926 25.7071C13.4801 25.8946 13.7345 26 13.9997 26C14.2649 26 14.5192 25.8946 14.7068 25.7071C14.8943 25.5196 14.9997 25.2652 14.9997 25L14.9997 13.4141L16.2927 14.707C16.4808 14.8917 16.7342 14.9947 16.9978 14.9935C17.2614 14.9923 17.5139 14.887 17.7003 14.7006C17.8867 14.5142 17.992 14.2617 17.9932 13.9981C17.9943 13.7345 17.8914 13.4811 17.7067 13.293L14.7067 10.293C14.6138 10.2001 14.5036 10.1264 14.3823 10.0762C14.261 10.0259 14.131 10 13.9996 10C13.8683 10 13.7383 10.0259 13.617 10.0762C13.4957 10.1264 13.3855 10.2001 13.2926 10.293L10.2926 13.293C10.1998 13.3858 10.1261 13.4961 10.0758 13.6174C10.0256 13.7387 9.9997 13.8687 9.9997 14C9.99971 14.1313 10.0256 14.2613 10.0759 14.3827C10.1261 14.504 10.1998 14.6142 10.2927 14.707V14.707Z" fill="#C2DAF9"/>
<path d="M37.2201 8.31818V18.5H35.0674V8.31818H37.2201ZM38.4614 18.5V10.8636H40.4799V12.2109H40.5694C40.7285 11.7635 40.9936 11.4105 41.3648 11.152C41.736 10.8935 42.1802 10.7642 42.6972 10.7642C43.2209 10.7642 43.6667 10.8951 44.0346 11.157C44.4025 11.4155 44.6477 11.7668 44.7704 12.2109H44.8499C45.0057 11.7734 45.2874 11.4238 45.6951 11.1619C46.1061 10.8968 46.5916 10.7642 47.1518 10.7642C47.8644 10.7642 48.4427 10.9912 48.8868 11.4453C49.3343 11.8961 49.558 12.5357 49.558 13.3643V18.5H47.4451V13.782C47.4451 13.3577 47.3324 13.0395 47.107 12.8274C46.8816 12.6153 46.5999 12.5092 46.2618 12.5092C45.8774 12.5092 45.5774 12.6319 45.362 12.8771C45.1466 13.1191 45.0388 13.4389 45.0388 13.8366V18.5H42.9856V13.7372C42.9856 13.3627 42.8779 13.0644 42.6624 12.8423C42.4503 12.6203 42.1702 12.5092 41.8222 12.5092C41.5869 12.5092 41.3748 12.5689 41.1859 12.6882C41.0002 12.8042 40.8528 12.9683 40.7434 13.1804C40.634 13.3892 40.5793 13.6345 40.5793 13.9162V18.5H38.4614ZM52.9185 18.6442C52.4313 18.6442 51.9971 18.5597 51.616 18.3906C51.2348 18.2183 50.9332 17.9647 50.7111 17.63C50.4924 17.2919 50.383 16.871 50.383 16.3672C50.383 15.9429 50.4609 15.5866 50.6167 15.2983C50.7724 15.0099 50.9846 14.7779 51.253 14.6023C51.5215 14.4266 51.8264 14.294 52.1678 14.2045C52.5125 14.1151 52.8738 14.0521 53.2516 14.0156C53.6957 13.9692 54.0537 13.9261 54.3255 13.8864C54.5973 13.8433 54.7945 13.7803 54.9171 13.6974C55.0397 13.6146 55.101 13.492 55.101 13.3295V13.2997C55.101 12.9848 55.0016 12.7412 54.8027 12.5689C54.6072 12.3965 54.3288 12.3104 53.9675 12.3104C53.5864 12.3104 53.2831 12.3949 53.0577 12.5639C52.8323 12.7296 52.6832 12.9384 52.6103 13.1903L50.6515 13.0312C50.7509 12.5672 50.9464 12.1662 51.2381 11.8281C51.5298 11.4867 51.906 11.2249 52.3667 11.0426C52.8307 10.857 53.3676 10.7642 53.9775 10.7642C54.4017 10.7642 54.8077 10.8139 55.1955 10.9134C55.5866 11.0128 55.933 11.1669 56.2346 11.3757C56.5395 11.5845 56.7798 11.853 56.9554 12.1811C57.1311 12.5059 57.2189 12.8954 57.2189 13.3494V18.5H55.2104V17.4411H55.1508C55.0281 17.6797 54.8641 17.8902 54.6586 18.0724C54.4531 18.2514 54.2062 18.3923 53.9178 18.495C53.6294 18.5945 53.2964 18.6442 52.9185 18.6442ZM53.525 17.1825C53.8366 17.1825 54.1117 17.1212 54.3503 16.9986C54.589 16.8726 54.7762 16.7036 54.9121 16.4915C55.048 16.2794 55.116 16.0391 55.116 15.7706V14.9602C55.0497 15.0033 54.9585 15.0431 54.8425 15.0795C54.7298 15.1127 54.6022 15.1442 54.4597 15.174C54.3172 15.2005 54.1747 15.2254 54.0321 15.2486C53.8896 15.2685 53.7604 15.2867 53.6444 15.3033C53.3958 15.3397 53.1787 15.3977 52.9931 15.4773C52.8075 15.5568 52.6633 15.6645 52.5606 15.8004C52.4578 15.933 52.4064 16.0987 52.4064 16.2976C52.4064 16.5859 52.5108 16.8063 52.7196 16.9588C52.9318 17.108 53.2002 17.1825 53.525 17.1825ZM61.8124 21.5227C61.1263 21.5227 60.538 21.4283 60.0475 21.2393C59.5603 21.0537 59.1725 20.8002 58.8841 20.4787C58.5958 20.1572 58.4085 19.7959 58.3223 19.3949L60.2811 19.1314C60.3408 19.2839 60.4353 19.4264 60.5645 19.5589C60.6938 19.6915 60.8645 19.7976 61.0766 19.8771C61.292 19.96 61.5539 20.0014 61.8621 20.0014C62.3228 20.0014 62.7023 19.8887 63.0006 19.6634C63.3022 19.4413 63.453 19.0684 63.453 18.5447V17.1477H63.3635C63.2707 17.3598 63.1315 17.5604 62.9459 17.7493C62.7603 17.9382 62.5217 18.0923 62.23 18.2116C61.9383 18.331 61.5903 18.3906 61.186 18.3906C60.6126 18.3906 60.0906 18.258 59.6199 17.9929C59.1526 17.7244 58.7797 17.3151 58.5013 16.7649C58.2262 16.2114 58.0887 15.5121 58.0887 14.6669C58.0887 13.8018 58.2295 13.0793 58.5113 12.4993C58.793 11.9193 59.1675 11.4851 59.6348 11.1967C60.1055 10.9084 60.6209 10.7642 61.181 10.7642C61.6086 10.7642 61.9665 10.8371 62.2549 10.983C62.5432 11.1255 62.7752 11.3045 62.9509 11.5199C63.1299 11.732 63.2674 11.9408 63.3635 12.1463H63.4431V10.8636H65.5461V18.5746C65.5461 19.2242 65.387 19.7678 65.0688 20.2053C64.7506 20.6428 64.3098 20.9709 63.7463 21.1896C63.1862 21.4117 62.5416 21.5227 61.8124 21.5227ZM61.8571 16.7997C62.1985 16.7997 62.4869 16.7152 62.7222 16.5462C62.9608 16.3738 63.1431 16.1286 63.2691 15.8104C63.3983 15.4889 63.463 15.1044 63.463 14.657C63.463 14.2095 63.4 13.8217 63.274 13.4936C63.1481 13.1622 62.9658 12.9053 62.7272 12.723C62.4885 12.5407 62.1985 12.4496 61.8571 12.4496C61.5091 12.4496 61.2158 12.544 60.9772 12.733C60.7385 12.9186 60.5579 13.1771 60.4353 13.5085C60.3126 13.84 60.2513 14.2228 60.2513 14.657C60.2513 15.0978 60.3126 15.4789 60.4353 15.8004C60.5612 16.1186 60.7418 16.3655 60.9772 16.5412C61.2158 16.7135 61.5091 16.7997 61.8571 16.7997ZM70.2215 18.6491C69.436 18.6491 68.7599 18.4901 68.1931 18.1719C67.6297 17.8504 67.1955 17.3963 66.8906 16.8097C66.5856 16.2197 66.4332 15.522 66.4332 14.7166C66.4332 13.9311 66.5856 13.2417 66.8906 12.6484C67.1955 12.0552 67.6247 11.5928 68.1782 11.2614C68.735 10.9299 69.388 10.7642 70.137 10.7642C70.6408 10.7642 71.1098 10.8454 71.544 11.0078C71.9815 11.1669 72.3626 11.4072 72.6874 11.7287C73.0156 12.0502 73.2708 12.4545 73.4531 12.9418C73.6354 13.4257 73.7265 13.9924 73.7265 14.642V15.2237H67.2784V13.9112H71.7329C71.7329 13.6063 71.6666 13.3362 71.534 13.1009C71.4015 12.8655 71.2175 12.6816 70.9822 12.549C70.7502 12.4131 70.4801 12.3452 70.1718 12.3452C69.8503 12.3452 69.5653 12.4197 69.3167 12.5689C69.0714 12.7147 68.8792 12.9119 68.74 13.1605C68.6008 13.4058 68.5295 13.6792 68.5262 13.9808V15.2287C68.5262 15.6065 68.5958 15.933 68.735 16.2081C68.8775 16.4832 69.0781 16.6953 69.3366 16.8445C69.5951 16.9936 69.9017 17.0682 70.2563 17.0682C70.4917 17.0682 70.7071 17.035 70.9026 16.9688C71.0982 16.9025 71.2656 16.803 71.4048 16.6705C71.544 16.5379 71.65 16.3755 71.723 16.1832L73.6818 16.3125C73.5823 16.7831 73.3785 17.1941 73.0703 17.5455C72.7653 17.8935 72.3709 18.1652 71.887 18.3608C71.4064 18.553 70.8513 18.6491 70.2215 18.6491ZM80.9474 8.31818H83.1001V14.9304C83.1001 15.6728 82.9228 16.3224 82.5682 16.8793C82.2169 17.4361 81.7247 17.8703 81.0916 18.1818C80.4586 18.4901 79.7211 18.6442 78.8793 18.6442C78.0341 18.6442 77.295 18.4901 76.6619 18.1818C76.0289 17.8703 75.5367 17.4361 75.1854 16.8793C74.834 16.3224 74.6584 15.6728 74.6584 14.9304V8.31818H76.8111V14.7464C76.8111 15.1342 76.8956 15.4789 77.0646 15.7805C77.237 16.0821 77.4789 16.3191 77.7905 16.4915C78.102 16.6638 78.465 16.75 78.8793 16.75C79.2969 16.75 79.6598 16.6638 79.968 16.4915C80.2796 16.3191 80.5199 16.0821 80.6889 15.7805C80.8613 15.4789 80.9474 15.1342 80.9474 14.7464V8.31818ZM84.3415 21.3636V10.8636H86.4296V12.1463H86.524C86.6168 11.9408 86.7511 11.732 86.9267 11.5199C87.1057 11.3045 87.3377 11.1255 87.6228 10.983C87.9111 10.8371 88.2691 10.7642 88.6966 10.7642C89.2534 10.7642 89.7672 10.91 90.2378 11.2017C90.7085 11.4901 91.0846 11.9259 91.3664 12.5092C91.6481 13.0893 91.7889 13.8168 91.7889 14.6918C91.7889 15.5436 91.6514 16.2628 91.3763 16.8494C91.1045 17.4328 90.7333 17.8752 90.2627 18.1768C89.7953 18.4751 89.2717 18.6243 88.6916 18.6243C88.2807 18.6243 87.931 18.5563 87.6426 18.4205C87.3576 18.2846 87.1239 18.1139 86.9416 17.9084C86.7594 17.6996 86.6201 17.4891 86.524 17.277H86.4594V21.3636H84.3415ZM86.4147 14.6818C86.4147 15.1359 86.4776 15.532 86.6036 15.87C86.7295 16.2081 86.9118 16.4716 87.1504 16.6605C87.3891 16.8461 87.6791 16.9389 88.0205 16.9389C88.3652 16.9389 88.6568 16.8445 88.8955 16.6555C89.1341 16.4633 89.3147 16.1982 89.4374 15.8601C89.5633 15.5187 89.6263 15.1259 89.6263 14.6818C89.6263 14.241 89.565 13.8532 89.4424 13.5185C89.3197 13.1837 89.1391 12.9219 88.9004 12.733C88.6618 12.544 88.3685 12.4496 88.0205 12.4496C87.6758 12.4496 87.3841 12.5407 87.1455 12.723C86.9102 12.9053 86.7295 13.1638 86.6036 13.4986C86.4776 13.8333 86.4147 14.2277 86.4147 14.6818ZM94.8288 8.31818V18.5H92.7109V8.31818H94.8288ZM99.4856 18.6491C98.7134 18.6491 98.0455 18.4851 97.4821 18.157C96.9219 17.8255 96.4894 17.3648 96.1845 16.7749C95.8796 16.1816 95.7271 15.4938 95.7271 14.7116C95.7271 13.9228 95.8796 13.2334 96.1845 12.6435C96.4894 12.0502 96.9219 11.5895 97.4821 11.2614C98.0455 10.9299 98.7134 10.7642 99.4856 10.7642C100.258 10.7642 100.924 10.9299 101.484 11.2614C102.048 11.5895 102.482 12.0502 102.787 12.6435C103.092 13.2334 103.244 13.9228 103.244 14.7116C103.244 15.4938 103.092 16.1816 102.787 16.7749C102.482 17.3648 102.048 17.8255 101.484 18.157C100.924 18.4851 100.258 18.6491 99.4856 18.6491ZM99.4956 17.0085C99.8469 17.0085 100.14 16.9091 100.376 16.7102C100.611 16.508 100.788 16.233 100.907 15.8849C101.03 15.5369 101.091 15.1409 101.091 14.6967C101.091 14.2526 101.03 13.8565 100.907 13.5085C100.788 13.1605 100.611 12.8854 100.376 12.6832C100.14 12.4811 99.8469 12.38 99.4956 12.38C99.1409 12.38 98.8426 12.4811 98.6007 12.6832C98.362 12.8854 98.1814 13.1605 98.0588 13.5085C97.9394 13.8565 97.8798 14.2526 97.8798 14.6967C97.8798 15.1409 97.9394 15.5369 98.0588 15.8849C98.1814 16.233 98.362 16.508 98.6007 16.7102C98.8426 16.9091 99.1409 17.0085 99.4956 17.0085ZM106.309 18.6442C105.822 18.6442 105.387 18.5597 105.006 18.3906C104.625 18.2183 104.323 17.9647 104.101 17.63C103.883 17.2919 103.773 16.871 103.773 16.3672C103.773 15.9429 103.851 15.5866 104.007 15.2983C104.163 15.0099 104.375 14.7779 104.643 14.6023C104.912 14.4266 105.217 14.294 105.558 14.2045C105.903 14.1151 106.264 14.0521 106.642 14.0156C107.086 13.9692 107.444 13.9261 107.716 13.8864C107.988 13.8433 108.185 13.7803 108.307 13.6974C108.43 13.6146 108.491 13.492 108.491 13.3295V13.2997C108.491 12.9848 108.392 12.7412 108.193 12.5689C107.997 12.3965 107.719 12.3104 107.358 12.3104C106.977 12.3104 106.673 12.3949 106.448 12.5639C106.223 12.7296 106.073 12.9384 106.001 13.1903L104.042 13.0312C104.141 12.5672 104.337 12.1662 104.628 11.8281C104.92 11.4867 105.296 11.2249 105.757 11.0426C106.221 10.857 106.758 10.7642 107.368 10.7642C107.792 10.7642 108.198 10.8139 108.586 10.9134C108.977 11.0128 109.323 11.1669 109.625 11.3757C109.93 11.5845 110.17 11.853 110.346 12.1811C110.521 12.5059 110.609 12.8954 110.609 13.3494V18.5H108.601V17.4411H108.541C108.418 17.6797 108.254 17.8902 108.049 18.0724C107.843 18.2514 107.596 18.3923 107.308 18.495C107.02 18.5945 106.687 18.6442 106.309 18.6442ZM106.915 17.1825C107.227 17.1825 107.502 17.1212 107.741 16.9986C107.979 16.8726 108.167 16.7036 108.302 16.4915C108.438 16.2794 108.506 16.0391 108.506 15.7706V14.9602C108.44 15.0033 108.349 15.0431 108.233 15.0795C108.12 15.1127 107.993 15.1442 107.85 15.174C107.707 15.2005 107.565 15.2254 107.422 15.2486C107.28 15.2685 107.151 15.2867 107.035 15.3033C106.786 15.3397 106.569 15.3977 106.383 15.4773C106.198 15.5568 106.054 15.6645 105.951 15.8004C105.848 15.933 105.797 16.0987 105.797 16.2976C105.797 16.5859 105.901 16.8063 106.11 16.9588C106.322 17.108 106.591 17.1825 106.915 17.1825ZM114.576 18.6243C113.996 18.6243 113.471 18.4751 113 18.1768C112.533 17.8752 112.162 17.4328 111.887 16.8494C111.615 16.2628 111.479 15.5436 111.479 14.6918C111.479 13.8168 111.62 13.0893 111.902 12.5092C112.183 11.9259 112.558 11.4901 113.025 11.2017C113.496 10.91 114.011 10.7642 114.571 10.7642C114.999 10.7642 115.355 10.8371 115.64 10.983C115.929 11.1255 116.161 11.3045 116.336 11.5199C116.515 11.732 116.651 11.9408 116.744 12.1463H116.809V8.31818H118.921V18.5H116.833V17.277H116.744C116.644 17.4891 116.504 17.6996 116.321 17.9084C116.142 18.1139 115.909 18.2846 115.62 18.4205C115.335 18.5563 114.987 18.6243 114.576 18.6243ZM115.247 16.9389C115.589 16.9389 115.877 16.8461 116.113 16.6605C116.351 16.4716 116.533 16.2081 116.659 15.87C116.789 15.532 116.853 15.1359 116.853 14.6818C116.853 14.2277 116.79 13.8333 116.664 13.4986C116.538 13.1638 116.356 12.9053 116.117 12.723C115.879 12.5407 115.589 12.4496 115.247 12.4496C114.899 12.4496 114.606 12.544 114.367 12.733C114.129 12.9219 113.948 13.1837 113.826 13.5185C113.703 13.8532 113.642 14.241 113.642 14.6818C113.642 15.1259 113.703 15.5187 113.826 15.8601C113.952 16.1982 114.132 16.4633 114.367 16.6555C114.606 16.8445 114.899 16.9389 115.247 16.9389Z" fill={`${mounted && theme === "dark"? "#ffffff":"#121826"}`}/>
</svg>

    )
}