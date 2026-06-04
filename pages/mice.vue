<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans antialiased">
    <!-- Navigation -->
    <header class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div class="flex-shrink-0">
          <svg width="160" height="56" viewBox="0 0 349 122" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-10 w-auto md:h-12">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4781 0.477084C16.1016 0.949588 11.6804 8.54629 8.49792 14.1877L6.84589 17.1162L8.1112 19.2204L9.37651 21.3245L12.5941 15.6548L15.8117 9.98479L15.9165 15.6396L16.0216 21.2944L12.5476 26.7358L9.07362 32.1772L9.10639 35.2328C9.12429 36.9137 9.19936 38.3491 9.27289 38.4228C9.34642 38.4965 10.7458 36.6229 12.3826 34.2588C14.0191 31.8948 15.5031 29.7979 15.6802 29.5983C15.8574 29.399 16.0022 34.5084 16.0022 40.9529V52.6701H10.2448H4.48709L4.78504 51.2388C5.41636 48.2049 5.10241 47.5653 1.82882 45.2092L0 43.8929V50.3808V56.8684L2.00027 56.8516C3.10023 56.8424 4.72903 56.694 5.61981 56.5215C6.51898 56.347 7.23908 56.3543 7.23908 56.5379C7.23908 56.7195 9.21078 56.8684 11.6206 56.8684H16.0022V61.2576V65.6467L11.1444 65.649C8.47277 65.6502 4.8719 65.7616 3.14329 65.8963L0 66.1414V68.9249C0 70.4557 0.171069 71.8141 0.379859 71.9435C0.58903 72.0729 1.78386 71.7187 3.03508 71.1561C4.90619 70.3149 5.71164 70.1622 7.57285 70.2973C9.5053 70.4374 10.1328 70.6889 11.8713 72.0206C14.1669 73.7793 19.7364 76.6513 22.8077 77.6605C26.6501 78.9226 29.0474 77.9712 36.1775 72.3542C42.4561 67.4081 46.2665 64.8834 47.4529 64.8834C48.8078 64.8834 50.2434 65.8311 59.0751 72.5561L64.9997 77.0677L67.0762 76.5143C68.2181 76.2098 69.6076 75.9586 70.1642 75.9563C70.9899 75.9525 71.1396 76.0926 70.9773 76.7151C70.8607 77.162 70.9655 77.4784 71.2303 77.4784C71.7858 77.4784 80.784 72.6381 82.8265 71.2408C84.1113 70.3615 84.6946 70.2267 87.2146 70.2267C89.6873 70.2267 90.3304 70.3691 91.523 71.1809C93.0394 72.2133 94.4487 72.4045 95.1749 71.6771C95.4408 71.4107 95.6321 70.1336 95.6321 68.6237V66.0284L93.8223 65.9849C91.9333 65.9395 90.8173 65.8429 88.1015 65.4895C87.1822 65.37 85.2787 65.5464 83.72 65.8956C82.204 66.2353 80.0715 66.7082 78.9814 66.9459C77.3767 67.2967 77.0677 67.4864 77.3565 67.944C77.963 68.9047 77.7706 69.352 76.5301 69.8664C75.8728 70.1393 74.47 71.0134 73.4127 71.8095C72.232 72.698 70.7018 73.4331 69.4472 73.7144L67.4042 74.1724L65.6112 72.429C64.1337 70.992 55.3009 64.1277 51.8715 61.7511L50.9734 61.1289L57.5477 52.0976L64.1219 43.0662L65.1559 44.91C65.7244 45.9245 68.3705 50.7903 71.0364 55.7234C73.7022 60.6564 76.0066 64.8216 76.1571 64.9796C76.3079 65.1376 77.0208 64.6567 77.742 63.9117L79.0531 62.5564L77.627 59.9442C76.8425 58.5073 76.2009 57.2275 76.2009 57.1001C76.2009 56.9726 80.5729 56.8684 85.9165 56.8684H95.6321V54.4326C95.6321 51.8529 95.2446 51.0663 83.1073 29.0067C82.2413 27.4323 80.8141 24.8129 79.9362 23.1863C78.4564 20.4436 78.2511 20.2284 77.1176 20.2284C75.9715 20.2284 75.5547 20.689 70.4709 27.5754C64.2415 36.0137 63.2212 37.216 62.8284 36.5797C62.6779 36.3355 62.7339 35.8481 62.9534 35.4962C63.2589 35.0061 63.1164 34.4539 62.3434 33.1329C59.6939 28.6037 58.7048 29.6429 61.1363 34.4016C62.2599 36.6003 62.7788 38.0156 62.5647 38.2972C62.3796 38.5404 58.7318 43.5257 54.4585 49.3759C50.1855 55.2261 46.4284 60.0916 46.1095 60.1881C44.15 60.7805 35.4772 67.0849 30.4803 71.5485C27.6689 74.0602 27.5942 74.098 25.8527 73.9041C24.1564 73.7152 14.4523 69.2031 13.9333 68.3615C13.8099 68.1619 14.3536 67.7864 15.1415 67.5272C17.0549 66.8978 19.3059 65.4498 19.7958 64.5323C20.0145 64.1231 20.1932 62.2316 20.1932 60.3286V56.8684H22.5936C23.9526 56.8684 25.1924 57.0672 25.4511 57.3264C25.7368 57.6127 26.0321 57.6485 26.2386 57.4218C26.6947 56.9211 32.9028 48.2194 35.6197 44.2734C41.4811 35.7595 47.3623 27.8319 47.6053 28.1174C47.7536 28.2915 49.8121 31.3967 52.1793 35.018C54.5469 38.6392 56.5334 41.6017 56.594 41.6017C56.8146 41.6017 58.6747 38.0591 58.6747 37.6389C58.6747 37.2278 52.3816 27.5171 50.4221 24.9038C49.5946 23.8004 49.286 23.6634 47.6275 23.6634C46.2334 23.6634 45.5072 23.884 44.7486 24.5374C44.1904 25.0183 41.4807 28.5666 38.7264 32.4222L33.7189 39.4331L31.8139 39.5609C26.9561 39.8869 26.2082 40.5163 30.2956 40.8384L32.7157 41.0292L28.4987 46.8496L24.2814 52.6701H22.2373H20.1932L20.1978 40.9338L20.2024 29.1975L22.3996 32.6325C23.6085 34.5218 25.1067 36.8832 25.7292 37.8797C26.3514 38.8766 26.9465 39.6911 27.0513 39.6899C27.2083 39.688 28.8531 37.0896 29.2627 36.1965C29.3263 36.0576 27.3119 32.7226 24.7859 28.785L20.1932 21.626V15.8701L20.1936 10.1142L23.0477 15.0758C24.6175 17.8048 25.9033 20.1661 25.9049 20.3238C25.9068 20.4814 26.0634 20.61 26.2531 20.61C26.6516 20.61 28.5753 17.4456 28.5753 16.7907C28.5753 16.5491 26.4752 12.6752 23.908 8.18218C19.4007 0.293503 19.2 0.012976 18.0489 0.00648769C17.3936 0.00305268 16.6868 0.214879 16.4781 0.477084ZM45.4355 1.24042C45.0279 1.92246 42.5273 6.06507 39.879 10.4455L35.0634 18.4105L36.2964 20.4848C37.1559 21.931 37.6211 22.4084 37.8334 22.0615C38.001 21.7879 40.1156 18.3009 42.5327 14.3125C44.9498 10.3241 47.0605 6.92192 47.2228 6.75169C47.3855 6.58185 49.6254 9.97945 52.2006 14.3022C54.7759 18.625 57.0226 22.2481 57.1937 22.3542C57.5176 22.5546 59.5636 19.5665 59.5636 18.8929C59.5636 18.6807 57.5339 15.0732 55.0532 10.8756C52.5725 6.67841 50.1291 2.51442 49.6232 1.62209C48.831 0.225184 48.5281 0 47.44 0C46.4208 0 46.0337 0.239687 45.4355 1.24042ZM203.165 20.6329C198.266 21.6004 193.994 25.0385 192.403 29.2941C190.293 34.9386 190.53 43.2078 192.948 48.2427C194.509 51.4938 196.126 53.0735 199.52 54.6643C205.516 57.4752 214.625 55.9814 218.929 51.4812L219.896 50.4705L218.68 49.0835C218.011 48.321 216.979 47.3504 216.385 46.9271L215.306 46.1573L213.589 47.4702C211.368 49.1686 209.523 49.7816 206.695 49.7606C200.948 49.7175 198.503 46.3149 198.503 38.3575C198.503 33.7371 199.193 31.0769 200.895 29.1353C202.455 27.3556 204.021 26.7167 206.825 26.7167C209.549 26.7167 211.795 27.4609 213.75 29.0117L215.211 30.1712L217.43 28.0934L219.649 26.0156L218.316 24.6263C215.078 21.2539 208.629 19.5539 203.165 20.6329ZM130.684 38.1537C130.684 54.2593 130.726 55.3433 131.351 55.3669C131.718 55.3807 133.304 55.4238 134.876 55.4623L137.733 55.5326L137.924 44.4058L138.114 33.2795L141.933 40.78L145.753 48.2809H148.41H151.068L154.878 40.9594C156.974 36.9324 158.774 33.5546 158.879 33.4531C158.984 33.3512 159.069 38.1919 159.069 44.2096V55.1509L162.594 55.2608L166.118 55.3704V38.1812V20.9917H162.17H158.223L153.359 30.583L148.496 40.1743L143.684 30.6784L138.873 21.1825L134.779 21.0741L130.684 20.9657V38.1537ZM175.643 38.1667V55.3417H179.263H182.882V38.1667V20.9917H179.263H175.643V38.1667ZM227.079 38.1667V55.3417H239.287H251.495L251.384 52.4067L251.272 49.4713L242.795 49.5747L234.318 49.6785V45.2665V40.8548L241.652 40.7514L248.986 40.6475L249.104 38.5686C249.336 34.4756 249.84 34.7317 241.55 34.7317H234.318V30.915V27.0984H242.7H251.082V24.045V20.9917H239.08H227.079V38.1667ZM78.9689 30.0563C82.5637 36.4687 91.06 52.1964 91.06 52.4388C91.06 52.5659 87.2218 52.6701 82.5309 52.6701H74.0017L70.4972 46.1825C68.5697 42.6143 67.0549 39.5079 67.1311 39.2796C67.3444 38.6381 76.359 26.3846 76.6371 26.3583C76.772 26.3453 77.8213 28.0094 78.9689 30.0563ZM37.74 45.584C37.3392 46.068 37.7389 47.0336 40.1556 51.4209C41.7482 54.312 43.103 56.831 43.1659 57.0184C43.2288 57.2062 43.6696 57.1508 44.1455 56.8959C44.9898 56.4432 44.9943 56.4077 44.3402 55.4097C43.6368 54.3372 41.8651 51.2495 39.9216 47.7084C38.4422 45.0127 38.3157 44.8898 37.74 45.584ZM130.684 86.0659V103.432H134.304H137.924L137.938 97.993L137.953 92.5543L139.558 90.7295L141.164 88.9051L146.478 96.1683L151.791 103.432H155.906C158.406 103.432 160.022 103.281 160.022 103.049C160.022 102.838 156.921 98.5445 153.132 93.5077C149.342 88.4708 146.299 84.1866 146.369 83.9874C146.439 83.7881 149.411 80.4192 152.973 76.501C156.536 72.5832 159.509 69.2191 159.582 69.026C159.658 68.8207 157.92 68.7195 155.407 68.7825L151.102 68.8909L146.393 74.0434C143.804 76.8773 140.881 80.1814 139.899 81.3863L138.114 83.5763L138.011 76.1384L137.908 68.7001H134.296H130.684V86.0659ZM175.345 71.8366C174.701 73.5751 172.61 79.2055 170.698 84.3484C166.081 96.7694 163.832 102.949 163.832 103.214C163.832 103.334 165.51 103.432 167.562 103.432H171.292L172.424 99.9014L173.557 96.3709H180.367H187.178L188.364 99.8059L189.55 103.241L193.264 103.35C195.307 103.41 196.979 103.306 196.979 103.118C196.979 102.93 195.164 97.8144 192.946 91.7493C190.727 85.6846 187.941 78.0605 186.754 74.8067L184.597 68.8909L180.556 68.7833L176.516 68.6753L175.345 71.8366ZM203.742 68.9214C203.585 69.0794 203.456 76.909 203.456 86.3205V103.432H207.076H210.695V97.119V90.8059L213.799 90.9169L216.902 91.0276L220.394 97.1343L223.885 103.241L227.768 103.35C230.127 103.416 231.651 103.312 231.651 103.084C231.651 102.878 230.022 99.9609 228.031 96.6011C226.04 93.2416 224.412 90.3242 224.412 90.1181C224.412 89.912 224.774 89.628 225.216 89.4876C226.472 89.088 228.955 86.6579 229.856 84.9469C231.102 82.5809 231.044 77.2231 229.745 74.6636C228.595 72.3961 226.806 70.8622 224.031 69.763C222.138 69.0134 221.069 68.9188 212.981 68.7833C208.057 68.7008 203.899 68.763 203.742 68.9214ZM239.271 86.0659V103.432H251.463H263.655V100.378V97.3251H255.082H246.51V93.1352V88.9448L253.844 88.8414L261.178 88.7376L261.29 85.7797L261.401 82.8218H253.955H246.51V78.8143V74.8067H254.892H263.274V71.7534V68.7001H251.272H239.271V86.0659ZM271.955 69.1634C271.859 69.4333 271.796 77.2112 271.814 86.4476L271.847 103.241L283.562 103.342L295.278 103.443V100.384V97.3251H287.282H279.285L279.186 83.108L279.086 68.8909L275.607 68.7817C273.038 68.7012 272.084 68.8008 271.955 69.1634ZM302.081 76.6052C302.051 80.9691 302.044 87.1155 302.066 90.2643C302.088 93.413 302.112 97.6701 302.121 99.725L302.136 103.46L305.661 103.351L309.185 103.241V86.0659V68.8909L305.661 68.781L302.136 68.6714L302.081 76.6052ZM322.213 85.6419C318.715 94.9729 315.853 102.799 315.853 103.034C315.853 103.325 317.012 103.425 319.526 103.35L323.198 103.241L324.383 99.8059L325.568 96.3709H332.385H339.201L340.368 99.9014L341.534 103.432H345.267C347.32 103.432 349 103.287 349 103.11C349 102.816 346.464 95.8252 339.977 78.2418C338.622 74.5682 337.295 70.9615 337.028 70.2267L336.542 68.8909L332.557 68.7833L328.573 68.6756L322.213 85.6419ZM221.64 75.8754C224 77.5616 224.138 81.5111 221.91 83.6099C220.983 84.4835 220.618 84.5469 215.81 84.6641L210.695 84.7892V79.7596V74.73L215.553 74.864C219.891 74.9831 220.542 75.0915 221.64 75.8754ZM184.975 89.4055C185.228 90.0204 184.874 90.0734 180.508 90.0734H175.767L178.086 83.0683L180.406 76.0632L182.553 82.4004C183.735 85.8858 184.824 89.0383 184.975 89.4055ZM32.2722 76.875C30.5767 77.491 28.3075 78.9345 25.9083 80.9222C20.8764 85.0919 18.4052 85.6831 15.0291 83.5263C12.2322 81.739 9.50453 80.5722 8.00109 80.5192C7.26766 80.4932 5.16756 80.597 3.33379 80.7493L0 81.0268V83.5797V86.1331L3.98264 85.3923L7.96528 84.6515L12.079 86.8785C15.894 88.9433 16.3725 89.1048 18.6692 89.1032C21.7032 89.1006 23.844 88.1006 28.3467 84.5831C32.3507 81.455 33.6705 80.7837 35.2364 81.0779C36.5414 81.3229 39.6923 83.3847 42.863 86.0675C47.0266 89.5902 48.1971 89.4654 53.5311 84.9282C56.2157 82.6443 59.0488 80.9134 60.1015 80.9134C61.3905 80.9134 62.9766 81.8107 66.8663 84.7404C71.0177 87.867 73.0062 88.9017 75.4126 89.1872C77.6498 89.4528 79.1658 88.9765 83.0502 86.788C86.9383 84.598 87.7655 84.4587 90.825 85.4785C92.197 85.9358 93.7968 86.2552 94.3805 86.1881C95.3471 86.0766 95.4511 85.9133 95.5471 84.3484L95.653 82.6309L93.0706 81.5199C91.1427 80.6905 89.8782 80.4062 88.0802 80.3989C85.8841 80.3894 85.305 80.5798 81.5086 82.5595C79.1037 83.8133 76.8543 84.7301 76.183 84.7301C74.5248 84.7301 72.5638 83.6775 68.9134 80.8275C64.4313 77.3288 63.1568 76.7151 60.3743 76.7151C57.4059 76.7151 55.3481 77.725 51.0637 81.284C49.2879 82.7595 47.6968 83.9668 47.5288 83.9668C47.3607 83.9668 45.7278 82.7435 43.9001 81.2485C38.8621 77.128 35.2818 75.7811 32.2722 76.875ZM334.848 83.4897L337.057 90.0734H332.329C328.698 90.0734 327.644 89.9627 327.791 89.5963C327.896 89.3341 328.967 86.1995 330.172 82.6309C331.377 79.0623 332.425 76.3143 332.501 76.5242C332.578 76.7342 333.634 79.8684 334.848 83.4897ZM31.4073 92.3218C30.5554 92.7096 28.2061 94.1565 26.1876 95.5374C22.4271 98.1091 19.4061 99.346 17.839 98.956C17.3528 98.8346 15.3564 97.7999 13.4033 96.6564C8.71509 93.9111 7.70924 93.6462 5.57371 94.5924C4.65778 94.9981 3.7929 95.5171 3.65193 95.7458C3.50067 95.9908 4.20057 96.5961 5.35692 97.2205C6.43592 97.803 8.88655 99.2132 10.803 100.354C14.9018 102.796 16.4038 103.392 18.5046 103.415C21.1941 103.444 23.7507 102.383 28.5727 99.235C31.165 97.543 33.6655 96.1801 34.1776 96.1801C35.4315 96.1801 36.0434 96.5454 40.5945 100.01C46.4239 104.448 48.1174 104.681 52.1191 101.599C60.971 94.7794 60.0192 94.9103 66.8404 99.575C74.1503 104.574 77.1454 104.667 84.583 100.129C85.9451 99.2976 88.217 98.1167 89.6313 97.5045C91.0456 96.8927 92.2031 96.2889 92.2031 96.1629C92.2031 95.6519 88.79 94.2718 87.5262 94.2718C86.688 94.2718 85.2512 94.7836 83.7581 95.6145C82.4307 96.3526 80.2917 97.4766 79.0054 98.1113C76.8097 99.1949 76.5571 99.238 74.8826 98.8159C73.8627 98.5587 71.1339 97.0831 68.5099 95.3706C64.0468 92.4573 62.1601 91.6028 60.1987 91.6058C58.6751 91.6085 55.6598 93.2123 52.5786 95.6587C48.9507 98.5396 47.9448 99.2334 47.3958 99.2334C47.1531 99.2334 45.2622 97.9239 43.1941 96.3236C37.1948 91.6806 34.6874 90.8295 31.4073 92.3218ZM29.0516 108.708C27.9516 109.252 27.0513 109.825 27.0513 109.982C27.0513 110.139 28.2941 110.997 29.8136 111.889C31.333 112.78 35.7218 115.385 39.5669 117.676C43.412 119.968 46.8411 121.913 47.187 121.999C47.6438 122.113 67.1627 111.027 68.1422 110.098C68.3556 109.895 64.4732 108.012 63.8434 108.012C63.5287 108.012 59.9331 109.988 55.8526 112.404C51.7724 114.82 48.178 116.895 47.8648 117.015C47.533 117.143 44.2293 115.415 39.9357 112.869C35.8879 110.468 32.233 108.328 31.8139 108.112C31.2214 107.807 30.6068 107.94 29.0516 108.708Z" fill="black"/>
          </svg>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#why" class="hover:text-blue-600 transition-colors">Почему Карелия</a>
          <a href="#programs" class="hover:text-blue-600 transition-colors">Программы</a>
          <a href="#gr" class="hover:text-blue-600 transition-colors">GR и доступ</a>
          <a href="#cases" class="hover:text-blue-600 transition-colors">Кейсы</a>
          <a href="#contacts" class="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">Обсудить миссию</a>
          <a href="https://t.me/artemslifanov" target="_blank" class="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all font-bold">Написать в Telegram</a>
        </nav>
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="p-2 rounded-xl hover:bg-gray-100 transition-all">
            <Menu v-if="!isMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile menu -->
    <BaseMobileMenu
      v-model="isMenuOpen"
      :menu-items="mobileMenuItems"
      cta-link="https://t.me/artemslifanov"
      cta-text="Написать в Telegram"
      theme="light"
      accent-color="blue"
    />

    <main class="pt-20">
      <!-- HERO -->
      <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white">
        <!-- Subtle background pattern -->
        <div class="absolute inset-0 z-0">
          <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full"></div>
          <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100/30 blur-[100px] rounded-full"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10 w-full">
          <div class="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                Бизнес-миссии в Карелию.<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">Под ключ с GR-сопровождением.</span>
              </h1>

              <p class="text-lg text-slate-700 leading-relaxed mb-4 max-w-lg">
                Вы тратите месяцы на поиск партнёров в новом регионе.
                Мы открываем нужные двери за 3–5 дней.
              </p>
              <p class="text-base text-slate-600 leading-relaxed mb-10 max-w-lg">
                Прямой доступ к собственникам предприятий, профильным министерствам и инвестпроектам Республики Карелия.
              </p>

              <div class="flex flex-wrap gap-4 mb-12">
                <a href="#contacts" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30">
                  Обсудить задачу
                </a>
                <a href="#programs" class="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl transition-all border border-slate-200 hover:border-slate-300 shadow-sm">
                  Смотреть форматы
                </a>
              </div>

              <!-- Trust badges -->
              <div class="flex flex-wrap gap-3">
                <div v-for="badge in trustBadges" :key="badge" class="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 shadow-sm">
                  <Icon name="fa-solid:check" class="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span>{{ badge }}</span>
                </div>
              </div>
            </div>

            <!-- Right: Image slider + KPI row -->
            <div class="space-y-4">
              <!-- Slider -->
              <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
                <div v-for="(slide, index) in slides" :key="index"
                     class="absolute inset-0 transition-opacity duration-1000"
                     :class="{ 'opacity-100': index === currentSlide, 'opacity-0': index !== currentSlide }">
                  <img :src="slide"
                       :alt="'Karelia landscape ' + (index + 1)"
                       class="w-full h-full object-cover" />
                </div>
                <!-- Dots -->
                <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  <button v-for="(slide, index) in slides" :key="index"
                          class="w-2 h-2 bg-white/50 rounded-full transition-all"
                          :class="{ 'bg-white w-5': index === currentSlide }"
                          @click="currentSlide = index"></button>
                </div>
              </div>

              <!-- KPI row -->
              <div class="grid grid-cols-4 gap-2">
                <div v-for="(kpi, i) in kpis" :key="i" 
                     class="p-3 rounded-xl border border-slate-100 bg-slate-50/50 text-center">
                  <div class="text-sm md:text-base font-bold text-slate-800">{{ kpi.val }}</div>
                  <div class="text-[10px] text-slate-500 leading-snug mt-0.5">{{ kpi.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY KARELIA -->
      <section id="why" class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Экономика региона
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Почему бизнес выбирает Карелию
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Индустриальный регион Северо-Запада. Здесь ещё есть пространство — рынки, которые ваши конкуренты не заметили. 107 млрд рублей инвестиций ежегодно идут в территорию с нулевым налогом на прибыль первые пять лет.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(card, i) in advantages" :key="i" 
                 class="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div class="w-full h-48 overflow-hidden">
                <img v-if="card.image" :src="card.image" :alt="card.title"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div v-else class="w-full h-full bg-slate-100 flex items-center justify-center">
                  <Icon :name="card.icon" class="w-12 h-12 text-slate-300" />
                </div>
              </div>
              <div class="p-6">
                <div class="text-3xl font-black text-slate-900 mb-2">{{ card.metric }}</div>
                <div class="text-slate-900 font-bold mb-2 text-lg">{{ card.title }}</div>
                <div class="text-sm text-slate-500 leading-relaxed">{{ card.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- VALUE PROPOSITION -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
                Наш подход
              </div>
              <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                Не тур.<br />
                <span class="text-blue-600">Бизнес-инструмент.</span>
              </h2>

              <div class="space-y-4 mb-10">
                <div v-for="(item, i) in valueList" :key="i" 
                     class="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div class="mt-0.5 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="fa-solid:check" class="w-3 h-3 text-white" />
                  </div>
                  <span class="text-slate-700 font-medium">{{ item }}</span>
                </div>
              </div>

              <div class="p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
                <p class="text-base font-medium italic leading-relaxed mb-4">
                  «Результат — конкретные договорённости и точки роста.
                  Стоимость одной миссии кратно ниже стоимости одной ошибки при самостоятельном выходе в регион.»
                </p>
                <p class="text-sm font-semibold opacity-90">
                  — Артём Селифанов, организатор бизнес-миссий, 6 лет в системе поддержки предпринимательства Карелии
                </p>
              </div>
            </div>

            <div class="lg:sticky lg:top-28">
              <div class="space-y-6">
                <!-- How it works steps -->
                <div class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-6">Как это работает</div>
                  <div class="space-y-6">
                    <div v-for="(step, i) in steps" :key="i" class="flex gap-4">
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-black text-slate-600">
                        {{ i + 1 }}
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 mb-1">{{ step.title }}</div>
                        <div class="text-sm text-slate-500">{{ step.desc }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROGRAMS & PRICING -->
      <section id="programs" class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Форматы
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Форматы бизнес-миссий
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Прозрачная логика. Вы платите за доступ и результат — не за дни проживания и «туристическую программу»
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div v-for="(plan, i) in pricingPlans" :key="i" 
                 class="relative p-8 rounded-2xl border transition-all hover:shadow-xl"
                 :class="plan.highlight ? 'border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-500/10' : 'border-slate-200 bg-white hover:border-slate-300'">
              <div v-if="plan.highlight" class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Рекомендуем
              </div>

              <div class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{{ plan.name }}</div>
              <div class="text-sm text-slate-400 mb-6">{{ plan.duration }}</div>
              
              <div class="mb-8">
                <span class="text-4xl font-black text-slate-900">{{ plan.price }}</span>
                <span class="text-lg text-slate-500 font-medium"> ₽ / чел</span>
              </div>

              <div class="space-y-3 mb-8">
                <div v-for="feature in plan.features" :key="feature" class="flex items-start gap-3 text-sm text-slate-600">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  {{ feature }}
                </div>
              </div>

              <div class="p-4 rounded-xl mb-8" :class="plan.highlight ? 'bg-blue-100/50' : 'bg-slate-50'">
                <div class="text-xs font-bold text-slate-400 uppercase mb-1">Результат</div>
                <div class="text-sm font-bold text-slate-800">{{ plan.result }}</div>
              </div>

              <a href="#contacts" 
                 class="block w-full py-4 text-center font-bold rounded-xl transition-all"
                 :class="plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'">
                Получить расчёт
              </a>
            </div>
          </div>

          <p class="text-center text-slate-500 text-sm mt-12 leading-relaxed">
            Итоговая стоимость формируется индивидуально после брифинга.<br />
            Для корпоративных групп и MICE-мероприятий (от 10 человек) — от 1,5 млн ₽.<br />
            Программа и предварительный расчёт — в течение 24 часов.
          </p>
        </div>
      </section>

      <!-- ENVIRONMENT -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-400 text-sm font-semibold mb-6">
              Среда для решений
            </div>
            <h2 class="text-3xl sm:text-5xl font-black mb-6">Среда, в которой принимают решения</h2>
            <p class="text-slate-400 text-lg max-w-3xl mx-auto">Переговорные и конференц-залы — для деловой части. Карельская природа — для того, что важнее</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(env, i) in environments" :key="i" 
                 class="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 hover:bg-white/10 transition-all">
              <div class="w-full h-48 overflow-hidden">
                <img v-if="env.image" :src="env.image" :alt="env.category"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div v-else class="w-full h-full bg-white/5 flex items-center justify-center">
                  <Icon :name="env.icon" class="w-12 h-12 text-blue-400/30" />
                </div>
              </div>
              <div class="p-6">
                <div class="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">{{ env.category }}</div>
                <div class="text-lg font-bold mb-3 text-white">{{ env.places }}</div>
                <div class="text-slate-400 text-sm leading-relaxed">{{ env.desc }}</div>
              </div>
            </div>
          </div>

          <div class="mt-16 text-center">
            <div class="inline-block p-8 rounded-2xl bg-white/5 border border-white/10">
              <p class="italic text-xl text-slate-300 font-medium">
                «Люди принимают решения не в переговорных — а после них. Карелия умеет создавать это "после".»
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- GR & ACCESS -->
      <section id="gr" class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Прямой доступ
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Прямой доступ к власти и институтам развития
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Вы приезжаете не на экскурсию. Вы сразу садитесь за стол с теми, кто принимает решения в регионе
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-12">
            <!-- Official sector -->
            <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
              <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Icon name="fa-solid:university" class="w-6 h-6 text-white" />
              </div>
              <div class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Официальный сектор</div>
              <div class="space-y-3">
                <div v-for="partner in grPartners" :key="partner" class="text-slate-800 font-semibold text-sm flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  {{ partner }}
                </div>
              </div>
            </div>

            <!-- Technoparks -->
            <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
                <Icon name="fa-solid:industry" class="w-6 h-6 text-white" />
              </div>
              <div class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Технопарки</div>
              <div class="flex flex-wrap gap-2">
                <span v-for="tp in techParks" :key="tp" class="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg font-medium">
                  {{ tp }}
                </span>
              </div>
            </div>

            <!-- Experience -->
            <div class="p-8 rounded-2xl bg-slate-900 text-white">
              <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Icon name="fa-solid:chart-line" class="w-6 h-6 text-white" />
              </div>
              <div class="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4">Опыт</div>
              <div class="space-y-4">
                <div>
                  <div class="text-3xl font-black text-white">6 лет</div>
                  <div class="text-sm text-slate-400">в системе поддержки предпринимательства Карелии</div>
                </div>
                <div>
                  <div class="text-3xl font-black text-white">40+</div>
                  <div class="text-sm text-slate-400">бизнес-миссий от разведки до закрытых сделок</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Anchor companies -->
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Якорные предприятия региона</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="company in anchorCompanies" :key="company" class="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                {{ company }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- IS THIS FOR YOU? -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Для кого это
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6">Это для вас?</h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Мы работаем с теми, кто едет в Карелию за результатом — а не за фотографиями с водопадов
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- This is for you -->
            <div class="p-8 rounded-2xl bg-white border border-green-200 shadow-sm">
              <div class="text-lg font-black text-green-700 mb-6 flex items-center gap-3">
                <Icon name="fa-solid:check-circle" class="w-6 h-6" />
                Это для вас, если...
              </div>
              <ul class="space-y-4">
                <li v-for="item in isForYou" :key="item" class="flex items-start gap-3 text-sm text-slate-700">
                  <Icon name="fa-solid:check" class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- This is NOT for you -->
            <div class="p-8 rounded-2xl bg-white border border-slate-200">
              <div class="text-lg font-black text-slate-500 mb-6 flex items-center gap-3">
                <Icon name="fa-solid:times-circle" class="w-6 h-6" />
                Это не для вас, если...
              </div>
              <ul class="space-y-4">
                <li v-for="item in notForYou" :key="item" class="flex items-start gap-3 text-sm text-slate-500">
                  <Icon name="fa-solid:times" class="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- BUSINESS TASKS -->
      <section class="py-20 px-4 sm:px-6 bg-white">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
            Под любую задачу
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-10">Проектируем миссию под вашу цель</h2>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tag in taskTags" :key="tag" 
                  class="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:border-blue-600 hover:text-blue-600 transition-all cursor-default">
              {{ tag }}
            </span>
          </div>
        </div>
      </section>

      <!-- CASES -->
      <section id="cases" class="py-24 md:py-32 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Результаты
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Кейсы и результаты
            </h2>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Мы не делаем туры. Мы создаём условия, в которых рождаются сделки
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div v-for="(caseItem, i) in cases" :key="i" 
                 class="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">{{ caseItem.client }}</div>
              <div class="text-slate-700 text-sm mb-4">{{ caseItem.task }}</div>
              <div class="text-slate-900 font-bold mb-4 leading-relaxed text-sm">{{ caseItem.text }}</div>
              <div class="text-sm text-green-700 font-bold mb-4">{{ caseItem.result }}</div>
              <div class="pt-4 border-t border-slate-100">
                <p class="text-xs text-slate-500 italic">{{ caseItem.quote }}</p>
                <p class="text-xs text-slate-400 mt-1">{{ caseItem.quoteAuthor }}</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="adv in expertAdv" :key="adv" class="flex items-start gap-3 p-4">
              <Icon name="fa-solid:star" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span class="text-slate-700 font-medium text-sm">{{ adv }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              Вопросы и ответы
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-slate-900 mb-6">Частые вопросы</h2>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, i) in faqs" :key="i" 
                 class="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-blue-300 transition-all">
              <button @click="toggleFaq(i)" class="w-full text-left p-6 flex items-start justify-between gap-4">
                <span class="font-bold text-slate-900 text-base">{{ faq.q }}</span>
                <Icon :name="openFaq === i ? 'fa-solid:chevron-up' : 'fa-solid:chevron-down'" 
                      class="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform" />
              </button>
              <div v-show="openFaq === i" class="px-6 pb-6">
                <p class="text-slate-600 text-sm leading-relaxed">{{ faq.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROGRAM EXAMPLE -->
      <section class="py-20 md:py-24 px-4 sm:px-6 bg-slate-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-4">
              Пример программы
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Как это выглядит изнутри
            </h2>
            <p class="text-base text-slate-600 max-w-2xl mx-auto">
              Отраслевая миссия · Аквакультура · 4 дня · <span class="text-slate-400">Москва — Петрозаводск — Кондопога — Москва</span>
            </p>
          </div>

          <!-- Day tabs -->
          <div class="flex overflow-x-auto gap-2 mb-6 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center md:overflow-visible md:flex-wrap md:mb-8">
            <button v-for="(day, i) in programDays" :key="i"
                    @click="activeDay = i"
                    class="px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0"
                    :class="activeDay === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'">
              День {{ day.num }}
            </button>
          </div>

          <!-- Active day content -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <!-- Day header -->
            <div class="p-4 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
              <div class="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div class="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-wider">День {{ programDays[activeDay].num }}</div>
                  <div class="text-lg md:text-xl font-black text-slate-900 mt-0.5">{{ programDays[activeDay].title }}</div>
                  <div class="text-xs md:text-sm text-slate-500 mt-0.5">{{ programDays[activeDay].location }}</div>
                </div>
                <div class="flex items-center gap-3 text-xs md:text-sm text-slate-500">
                  <span class="flex items-center gap-1.5">
                    <Icon name="fa-solid:handshake" class="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" />
                    {{ programDays[activeDay].meetings }} встреч
                  </span>
                  <span class="flex items-center gap-1.5">
                    <Icon name="fa-solid:utensils" class="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
                    {{ programDays[activeDay].meals }} приёма пищи
                  </span>
                </div>
              </div>
            </div>

            <!-- Schedule: mobile cards -->
            <div class="md:hidden divide-y divide-slate-100">
              <div v-for="(event, j) in programDays[activeDay].events" :key="j"
                   class="flex gap-4 p-4">
                <div class="flex-shrink-0 w-14 text-right">
                  <span class="font-mono text-sm font-bold text-blue-600">{{ event.time }}</span>
                </div>
                <div class="flex-shrink-0 text-xl">{{ event.icon }}</div>
                <div class="min-w-0">
                  <div class="text-sm font-semibold text-slate-900">{{ event.title }}</div>
                  <div class="text-xs text-slate-500 leading-relaxed mt-1">{{ event.details }}</div>
                </div>
              </div>
            </div>

            <!-- Schedule: desktop table -->
            <div class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-slate-100 bg-slate-50/50">
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3 w-20">Время</th>
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3 w-12"></th>
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3 w-1/2">Событие</th>
                    <th class="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-3 w-1/2">Детали</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(event, j) in programDays[activeDay].events" :key="j"
                      class="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                    <td class="px-6 py-3">
                      <span class="font-mono text-sm font-bold text-blue-600">{{ event.time }}</span>
                    </td>
                    <td class="px-6 py-3">
                      <span class="text-lg">{{ event.icon }}</span>
                    </td>
                    <td class="px-6 py-3">
                      <div class="text-sm font-semibold text-slate-900">{{ event.title }}</div>
                    </td>
                    <td class="px-6 py-3">
                      <div class="text-xs text-slate-500 leading-relaxed">{{ event.details }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Day note -->
            <div v-if="programDays[activeDay].note" class="p-4 bg-blue-50 border-t border-blue-100">
              <p class="text-xs text-blue-700 italic leading-relaxed">
                <Icon name="fa-solid:lightbulb" class="w-3 h-3 inline mr-1" />
                {{ programDays[activeDay].note }}
              </p>
            </div>
          </div>

          <!-- Quick stats bar -->
          <div class="mt-6 grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
            <div class="p-3 md:p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-xl md:text-2xl font-black text-blue-600">5</div>
              <div class="text-[10px] md:text-xs text-slate-500 mt-1">Встреч с ЛПР</div>
            </div>
            <div class="p-3 md:p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-xl md:text-2xl font-black text-blue-600">2</div>
              <div class="text-[10px] md:text-xs text-slate-500 mt-1">Выезда на объекты</div>
            </div>
            <div class="p-3 md:p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-xl md:text-2xl font-black text-blue-600">4</div>
              <div class="text-[10px] md:text-xs text-slate-500 mt-1">Дня программы</div>
            </div>
            <div class="p-3 md:p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div class="text-xl md:text-2xl font-black text-blue-600">1</div>
              <div class="text-[10px] md:text-xs text-slate-500 mt-1">Дистрибьютор</div>
            </div>
            <div class="p-3 md:p-4 rounded-xl bg-white border border-slate-200 text-center col-span-3 md:col-span-1">
              <div class="text-xl md:text-2xl font-black text-blue-600">PDF</div>
              <div class="text-[10px] md:text-xs text-slate-500 mt-1">Протокол + карта</div>
            </div>
          </div>

          <!-- Included / Not included -->
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div class="p-4 md:p-5 rounded-xl bg-green-50 border border-green-200">
              <div class="text-[10px] md:text-xs font-bold text-green-700 uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2">
                <Icon name="fa-solid:check-circle" class="w-3.5 h-3.5 md:w-4 md:h-4" />
                Включено
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <div v-for="item in includedItems" :key="item" class="flex items-start gap-2 text-[11px] md:text-xs text-slate-700">
                  <Icon name="fa-solid:check" class="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="p-4 md:p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div class="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2">
                <Icon name="fa-solid:times-circle" class="w-3.5 h-3.5 md:w-4 md:h-4" />
                Не включено
              </div>
              <div class="space-y-2">
                <div v-for="item in excludedItems" :key="item" class="flex items-start gap-2 text-[11px] md:text-xs text-slate-500">
                  <Icon name="fa-solid:times" class="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </div>
              </div>
            </div>
          </div>

          <!-- Quote -->
          <div class="mt-6 p-4 md:p-6 rounded-xl bg-white border border-slate-200">
            <Icon name="fa-solid:quote-left" class="w-5 h-5 md:w-6 md:h-6 text-blue-200 mb-2 md:mb-3" />
            <p class="text-xs md:text-sm text-slate-700 italic leading-relaxed mb-2 md:mb-3">
              «К концу третьего дня у нас было 5 живых контактов, понимание рынка и предварительная договорённость о пробной поставке. Я ехал разведать — уехал с конкретным планом.»
            </p>
            <p class="text-[10px] md:text-xs text-slate-500 font-semibold">— участник миссии, производитель рыбных кормов, Москва</p>
          </div>

          <!-- CTA -->
          <div class="mt-6 md:mt-8 text-center">
            <p class="text-base md:text-lg font-bold text-slate-900 mb-3 md:mb-4">Хотите такую же программу — под вашу отрасль?</p>
            <a href="#contacts" class="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 text-xs md:text-sm">
              Обсудить мою миссию →
            </a>
          </div>
        </div>
      </section>

      <!-- CTA / CONTACTS -->
      <section id="contacts" class="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden relative">
        <!-- Background effects -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full"></div>

        <div class="max-w-3xl mx-auto text-center relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-400 text-sm font-semibold mb-8">
            Свяжитесь с нами
          </div>

          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Обсудим вашу задачу
          </h2>

          <p class="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Расскажите о задаче в двух словах — пришлём предварительную программу и расчёт в течение 24 часов. Без давления и обязательств.
          </p>

            <!-- Simple form -->
            <div class="max-w-lg mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left">
              <div class="space-y-4">
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Ваше имя *</label>
                  <input v-model="formName" type="text" placeholder="Как к вам обращаться"
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Телефон *</label>
                  <input v-model="formPhone" type="tel" placeholder="+7 (___) ___-__-__"
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Email *</label>
                  <input v-model="formEmail" type="email" placeholder="name@company.ru"
                         class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Мессенджер (необязательно)</label>
                  <div class="flex flex-col sm:flex-row gap-3">
                    <input v-model="formTelegram" type="text" placeholder="@telegram"
                           class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                    <input v-model="formMax" type="text" placeholder="MAX"
                           class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label class="text-sm text-slate-400 mb-1 block">Ваша задача (необязательно)</label>
                  <textarea v-model="formTask" rows="3" placeholder="Опишите кратко, что хотите получить от поездки"
                            class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 outline-none focus:border-blue-500 transition-all text-sm resize-none"></textarea>
                </div>
                <button @click="submitForm" :disabled="formSubmitting" class="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25">
                  {{ formSubmitting ? 'Отправка...' : 'Получить программу и расчёт →' }}
                </button>
              </div>

              <!-- Success message -->
              <div v-show="formSubmitted" class="text-center py-8">
                <Icon name="fa-solid:check-circle" class="w-16 h-16 text-green-500 mx-auto mb-4" />
                <div class="text-xl font-bold mb-2">Заявка отправлена!</div>
                <p class="text-slate-400 text-sm">Отвечу лично в течение нескольких часов. Без спама и автоответов.</p>
              </div>
            </div>

          <p class="mt-6 text-sm text-slate-500 italic">
            Отвечаю лично в течение нескольких часов. Без спама и автоответов.<br />
            — Артём Селифанов
          </p>

          <p v-if="formError" class="mt-4 text-sm text-red-400 font-medium">{{ formError }}</p>

          <!-- Contact info -->
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-solid:map-marker-alt" class="w-4 h-4 text-blue-400" />
                Локация
              </div>
              <div class="text-slate-400">г. Петрозаводск, Республика Карелия</div>
            </div>
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-solid:envelope" class="w-4 h-4 text-blue-400" />
                Email
              </div>
              <a href="mailto:a9535487323@yandex.ru" class="text-slate-400 hover:text-blue-400 transition-colors">a9535487323@yandex.ru</a>
            </div>
            <div class="p-4">
              <div class="font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Icon name="fa-brands:telegram" class="w-4 h-4 text-blue-400" />
                Telegram
              </div>
              <a href="https://t.me/artemslifanov" target="_blank" class="text-slate-400 hover:text-blue-400 transition-colors">@artemslifanov</a>
            </div>
          </div>

          <!-- Quick contact buttons -->
          <div class="mt-12 flex flex-wrap justify-center gap-4">
            <a href="https://t.me/artemslifanov" target="_blank"
               class="px-6 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-semibold text-sm hover:bg-blue-600/30 transition-all flex items-center gap-2">
              <Icon name="fa-brands:telegram" class="w-4 h-4" />
              Написать в Telegram
            </a>
            <a href="mailto:a9535487323@yandex.ru"
               class="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              <Icon name="fa-solid:envelope" class="w-4 h-4" />
              Написать на Email
            </a>
            <a href="https://max.ru/u/f9LHodD0cOLO_FSLoMnfL87zUzWaeDrIUVzSccI1rSSfL24Xr81W37H7wmk" target="_blank"
               class="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              <Icon name="fa-solid:comment-dots" class="w-4 h-4" />
              Написать в MAX
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-12 bg-slate-950 text-slate-500 text-center border-t border-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-xs uppercase tracking-widest font-bold mb-2">
          © 2026 MICE KARELIA. Все права защищены.
        </div>
        <div class="text-xs text-slate-600">
          Организатор: Артём Селифанов · г. Петрозаводск, Республика Карелия
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import BaseMobileMenu from '~/components/layout/BaseMobileMenu.vue'
import { submitContactFormWithNotification } from '~/composables/useTelegramNotification'

const formSubmitting = ref(false)
const formError = ref('')

useHead({
  title: 'Бизнес-миссии в Карелию | MICE Karelia — Артём Селифанов',
  meta: [
    { name: 'description', content: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий. Программа и расчёт за 24 часа.' },
    { property: 'og:title', content: 'Бизнес-миссии в Карелию | MICE Karelia' },
    { property: 'og:description', content: 'Бизнес-миссии в Карелию под ключ. Прямой доступ к предприятиям, власти и инвестпроектам. 6 лет опыта, 40+ организованных миссий.' },
  ]
})

const isMenuOpen = ref(false)
const mobileMenuItems = [
  { href: '#why', label: 'Почему Карелия' },
  { href: '#programs', label: 'Программы' },
  { href: '#gr', label: 'GR и доступ' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#contacts', label: 'Обсудить миссию' },
]
const currentSlide = ref(0)
const slides = [
  '/images/hero/IMG_7319.webp',
  '/images/hero/IMG_7320.webp',
  '/images/hero/IMG_7321.webp',
  '/images/hero/IMG_7458.webp',
  '/images/hero/IMG_7459.webp',
  '/images/hero/IMG_7460.webp',
  '/images/hero/IMG_7461.webp'
]

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})

const kpis = [
  { val: '107+ млрд ₽', label: 'Инвестиций в регион ежегодно' },
  { val: '40%', label: 'ВРП — промышленность' },
  { val: '>50%', label: 'Форели России производится здесь' },
  { val: 'Топ-17', label: 'Инвестклимат РФ (RAEX)' },
]

const trustBadges = [
  '6 лет опыта в деловом туризме',
  '40+ бизнес-миссий проведено',
  'Прямой доступ к ЛПР региона',
]

const advantages = [
  { metric: '~40% ВРП', title: 'Промышленность', desc: 'ЛПК, горнодобывающий сектор, машиностроение. Реальная экономика, не сервисный пузырь', icon: 'fa-solid:industry', image: '/images/why%20Karelia/wrp.webp' },
  { metric: 'до 20%', title: 'Бумаги России', desc: 'Модернизированные ЦБК с глубокой переработкой. Сегежский и Кондопожский — якоря отрасли', icon: 'fa-solid:scroll', image: '/images/why%20Karelia/paper.webp' },
  { metric: '>50%', title: 'Садковой форели', desc: 'Абсолютный лидер аквакультуры России. Растущий рынок с господдержкой и потенциалом экспорта', icon: 'fa-solid:fish', image: '/images/why%20Karelia/trout.webp' },
  { metric: '0%', title: 'Налог на прибыль', desc: 'Нулевой налог на прибыль первые 5 лет. Страховые взносы 7,5%. Таможня без НДС для резидентов ОЭЗ', icon: 'fa-solid:percent', image: '/images/why%20Karelia/tax.webp' },
]

const valueList = [
  'Встречи с собственниками и директорами — без посредников и ассистентов',
  'Переговоры с партнёрами и поставщиками, отобранными под вашу отрасль',
  'Доступ к инвестиционным проектам и промышленным паркам региона',
  'GR-сопровождение: министерства, Корпорация развития, институты поддержки',
  'Полная логистика, размещение и отчётность для центров «Мой бизнес»'
]

const steps = [
  { title: 'Брифинг', desc: 'Вы рассказываете о целях. Мы задаём 5 ключевых вопросов, чтобы понять, кто нужен и зачем' },
  { title: 'Программа под задачу', desc: 'Формируем маршрут, список встреч и GR-сессии — согласовываем с вами до старта' },
  { title: 'Реализация', desc: 'Полное сопровождение: трансфер, размещение, модерация переговоров, протоколы встреч' },
  { title: 'Результат', desc: 'Конкретные договорённости, дорожная карта и отчёт для вашей управленческой команды' },
]

const pricingPlans = [
  {
    name: 'Базовый вход',
    duration: '3 дня',
    price: 'от 70 000',
    highlight: false,
    features: [
      'Обзор экономики и инвестклимата региона',
      'Посещение 1–2 профильных предприятий',
      'Встречи с представителями отрасли',
      'Нетворкинг-сессия с локальными предпринимателями'
    ],
    result: 'Понимание рынка, первые живые контакты и ориентир для следующего шага'
  },
  {
    name: 'Отраслевая миссия',
    duration: '3–5 дней',
    price: 'от 110 000',
    highlight: true,
    features: [
      'Подбор предприятий и партнёров под вашу отраслевую задачу',
      '5–7 B2B-встреч с собственниками и директорами',
      'GR-сессия с профильным министерством или Корпорацией развития',
      'Расширенный нетворкинг в закрытом формате',
      'Протокол встреч и дорожная карта'
    ],
    result: 'Конкретные партнёры, зафиксированные договорённости и дорожная карта входа в регион'
  },
  {
    name: 'Инвестиционная VIP',
    duration: '7+ дней',
    price: 'от 250 000',
    highlight: false,
    features: [
      'Погружение во все ключевые кластеры региона',
      'Встречи с первыми лицами предприятий и институтов',
      'Индивидуальные переговоры под инвестиционную задачу',
      'Разработка стратегии входа с финансовой моделью',
      'Юридическое и GR-сопровождение на старте',
      'Постмиссионное сопровождение (1 месяц)'
    ],
    result: 'Готовая модель запуска: партнёры, юрструктура, план первых 90 дней в регионе'
  }
]

const environments = [
  { category: 'Деловая часть', places: 'Космос Петрозаводск / Питер Инн', desc: 'Конференц-залы на 10–200 человек, переговорные комнаты, высокоскоростной Wi-Fi, трансфер из аэропорта', icon: 'fa-solid:briefcase', image: '/images/why%20Karelia/business-hotel.webp' },
  { category: 'Нетворкинг', places: 'Карьяла Парк / Ладожский Фьорд', desc: 'Выездные стратсессии, закрытые форматы для команд, командообразование на природе', icon: 'fa-solid:users', image: '/images/why%20Karelia/networking.webp' },
  { category: 'Уникальный опыт', places: 'Глэмпинг 4 Стихии / Рускеала', desc: 'Гастро-ужины с карельской кухней, неформальные встречи у воды, премиальный глэмпинг', icon: 'fa-solid:mountain-sun', image: '/images/why%20Karelia/glamping.webp' },
]

const grPartners = ['Минэкономразвития РК', 'Корпорация развития РК', 'Центр «Мой бизнес»']
const techParks = ['Надвоицы', 'Карельские продукты', 'Южная промзона', 'Биотех']
const anchorCompanies = [
  'Сегежский ЦБК', 
  'Кондопожский ЦБК', 
  'АО «Карельский окатыш»', 
  'ИП Федоренко (Кондопога)', 
  'ООО «Каламар» (Костомукша)', 
  'ГК «Интеркамень»'
]

const isForYou = [
  'Вы рассматриваете Карелию как рынок сбыта, площадку для производства или объект инвестиций',
  'Вам нужны живые переговоры с собственниками, а не презентации от менеджеров',
  'Вы или ваш представитель готовы принимать решения прямо на месте',
  'Вы хотите понять регион изнутри — с реальными цифрами и без маркетинга',
  'Вы ищете отраслевые партнёрства, поставщиков или локацию для проекта'
]

const notForYou = [
  'Вы ищете туристическую поездку с культурной программой',
  'Вам нужна красивая папка с буклетами о регионе',
  'Вы не готовы к реальным переговорам и конкретным договорённостям',
  'У вас нет мандата принимать решения или представлять компанию'
]

const taskTags = [
  'найти партнёров', 'выйти на регион', 'изучить отрасль', 
  'запустить производство', 'провести стратегическую сессию', 
  'получить субсидии', 'организовать корпоративный MICE'
]

const expertAdv = [
  'Прямой доступ к ЛПР региона',
  'Понимание отраслей, тарифов и господдержки',
  'Организация под ключ + сопровождение',
  'Отчётность для KPI центров «Мой бизнес»'
]

const cases = [
  { 
    client: 'Производитель промышленного оборудования, Москва', 
    task: 'Задача: найти OEM-партнёра в сегменте ЛПК.',
    text: 'За 4 дня: 3 встречи с директорами заводов, 2 тура по производствам, GR-сессия с Минпромом РК.',
    result: 'Итог: подписан протокол намерений, сделка на финальной стадии.',
    quote: '«За 4 дня мы прошли путь, который самостоятельно занял бы год переписки»',
    quoteAuthor: '— руководитель направления развития'
  },
  { 
    client: 'Частный инвестиционный фонд', 
    task: 'Задача: оценить проект горнодобычи перед входом.',
    text: 'За 3 дня: выезд на объект, встреча с собственниками, GR-сессия с Корпорацией развития РК.',
    result: 'Итог: запущен независимый аудит проекта. Объём сделки — 1,2 млрд ₽.',
    quote: '«Мы увидели всё своими глазами и поняли, что проект реален»',
    quoteAuthor: '— партнёр фонда'
  },
  { 
    client: 'Корпоративный MICE — федеральная компания, 28 участников', 
    task: 'Задача: выездная стратегическая сессия + командообразование.',
    text: 'За 5 дней: деловая программа в Петрозаводске, стратсессия в Karjala Park, тимбилдинг на Ладоге.',
    result: 'Итог: утверждена дорожная карта на 2025 год. NPS участников — 92%.',
    quote: '«Природа Карелии сделала то, что не удалось офисным переговорам»',
    quoteAuthor: '— HR-директор'
  },
]

const faqs = [
  {
    q: 'Нужно ли заранее знать, с кем мы хотим встретиться?',
    a: 'Нет. Именно за это вы и платите. Мы сами проектируем список контактов под вашу задачу: собираем информацию об отрасли, выходим на нужных людей и согласовываем встречи заранее. Вы приезжаете к уже подтверждённой программе.'
  },
  {
    q: 'Что если мы группа 10+ человек?',
    a: 'Для корпоративных групп (MICE) мы готовим отдельную программу. Стоимость — от 1,5 млн ₽ за группу, зависит от состава, формата и задач. Напишите нам — пришлём коммерческое предложение в течение 24 часов.'
  },
  {
    q: 'Как быстро готовится программа?',
    a: 'Предварительную программу и расчёт — пришлём в течение 24 часов после брифинга. Полную согласованную программу со встречами — в течение 5–7 рабочих дней.'
  },
  {
    q: 'Есть ли гарантии, что встречи состоятся?',
    a: 'Мы согласовываем все встречи письменно до старта миссии. Если встреча по независящим от нас причинам срывается — заменяем равноценной альтернативой. Это наша репутация, и мы её защищаем.'
  },
  {
    q: 'Подходит ли это для малого бизнеса или только для крупных компаний?',
    a: 'Подходит для любых предпринимателей, готовых к серьёзным переговорам. Среди участников наших миссий — от ИП до федеральных корпораций. Главное — конкретная задача и готовность двигаться к результату.'
  }
]

const includedItems = [
  'Проживание 3 ночи · Cosmos Hotel Petrozavodsk 4★',
  'Все завтраки',
  '2 деловых обеда и 2 ужина (включая неформальные)',
  'Все трансферы в рамках программы (минивэн бизнес-класса)',
  'Организация и сопровождение всех 5 встреч',
  'Личное сопровождение Артёма Селифанова',
  'Протокол встреч и контакты (PDF после миссии)',
  'Дорожная карта следующих шагов',
  'Отчётность для центров «Мой бизнес» (при необходимости)',
]

const excludedItems = [
  'Билеты на поезд туда и обратно (купе / СВ на выбор)',
  'Авиабилеты (если вы предпочитаете самолёт)',
  'Личные расходы и мини-бар',
  'Дополнительные экскурсии сверх программы',
]

const activeDay = ref(0)

const programDays = [
  {
    num: '0 · Отправление',
    title: 'Отправление',
    location: 'Москва, Ленинградский вокзал',
    meetings: 0,
    meals: 0,
    note: 'Поезд удобен: не нужно приезжать в аэропорт за 2 часа. Ложитесь спать в Москве — просыпаетесь в Карелии.',
    events: [
      { time: '21:35', icon: '🚆', title: 'Посадка на поезд № 018А «Карелия»', details: 'Вагон СВ или купе — в зависимости от предпочтений. Билеты оплачиваются отдельно' },
    ]
  },
  {
    num: '1 · Прибытие',
    title: 'Прибытие и погружение',
    location: 'Петрозаводск',
    meetings: 2,
    meals: 2,
    note: null,
    events: [
      { time: '07:10', icon: '🚐', title: 'Прибытие на вокзал Петрозаводск', details: 'Встреча с сопровождающим на перроне — табличка с именем' },
      { time: '07:45', icon: '🏨', title: 'Заселение · Cosmos Hotel Petrozavodsk 4★', details: 'Номер готов с утра. Завтрак включён' },
      { time: '09:30', icon: '🤝', title: 'Брифинг с организатором', details: 'Артём Селифанов лично: финальная сверка программы, цели на каждую встречу' },
      { time: '11:00', icon: '🤝', title: 'Встреча 1 · Минсельхоз и рыбхоз РК', details: 'Начальник отдела аквакультуры: господдержка, открытые участки, субсидии' },
      { time: '13:00', icon: '🍽', title: 'Обед · Ресторан «Карельская горница»', details: 'Карельская кухня + нетворкинг с приглашённым местным предпринимателем' },
      { time: '15:00', icon: '🤝', title: 'Встреча 2 · Корпорация развития РК', details: 'Инвестиционная карта, льготы для резидентов, практика входа' },
      { time: '19:30', icon: '🍽', title: 'Неформальный ужин', details: 'Встреча с двумя местными форелеводами в ресторане с видом на Онежское озеро' },
    ]
  },
  {
    num: '2 · Объекты',
    title: 'Выезд на объекты',
    location: 'Петрозаводск → Кондопога → Медвежьегорский район',
    meetings: 0,
    meals: 2,
    note: null,
    events: [
      { time: '09:00', icon: '🚐', title: 'Выезд на объект 1 · Форелевое хозяйство', details: '~60 км от Петрозаводска, Кондопожский район, трансфер на минивэне' },
      { time: '10:00', icon: '🏭', title: 'Тур по садковому хозяйству', details: 'Осмотр садков, кормовой техники, системы мониторинга. Разговор с собственником о логистике кормов' },
      { time: '14:00', icon: '🍽', title: 'Обед на месте · Полевой формат', details: 'Уха на берегу, приготовленная на костре хозяевами' },
      { time: '15:00', icon: '🏭', title: 'Тур по объекту 2 · Крупное садковое хозяйство', details: 'Один из топ-5 производителей форели в России. Переговоры о возможном партнёрстве' },
      { time: '20:00', icon: '🍽', title: 'Рабочий ужин с организатором', details: 'Разбор дня: что услышали, какие сигналы важны, корректировка стратегии' },
    ]
  },
  {
    num: '3 · Переговоры',
    title: 'Переговоры и стратегия',
    location: 'Петрозаводск',
    meetings: 3,
    meals: 1,
    note: null,
    events: [
      { time: '09:30', icon: '🤝', title: 'Встреча 3 · Ассоциация форелеводов Карелии', details: 'Главные игроки рынка, консолидированный запрос отрасли на корма' },
      { time: '11:30', icon: '☕', title: 'Рабочая пауза · Кофе-пауза в коворкинге', details: 'Время на звонки и внутренние согласования' },
      { time: '14:30', icon: '🤝', title: 'Встреча 4 · Технопарк «Надвоицы»', details: 'Площадки для локализации производства, готовая инфраструктура, условия аренды' },
      { time: '16:30', icon: '🤝', title: 'Встреча 5 · Потенциальный дистрибьютор', details: 'Встреча организована по итогам неформального ужина. Обсуждение схемы дистрибуции' },
      { time: '20:00', icon: '🍽', title: 'Завершающий ужин', details: 'Подведение итогов: договорённости, следующие шаги, кто за что отвечает' },
    ]
  },
  {
    num: '4 · Отъезд',
    title: 'Отъезд',
    location: 'Петрозаводск → Москва',
    meetings: 1,
    meals: 0,
    note: null,
    events: [
      { time: '09:30', icon: '📄', title: 'Финальная встреча с организатором', details: 'Передача протокола всех встреч (PDF). Контакты всех участников. Дорожная карта на 30 дней' },
      { time: '13:00', icon: '🍽', title: 'Обед · Свободное время', details: 'Самостоятельно или по рекомендации организатора. Поздний чекаут согласован заранее' },
      { time: '20:30', icon: '🚐', title: 'Трансфер на вокзал', details: 'Петрозаводск-Пасс. Поезд № 017А «Карелия» (двухэтажный)' },
      { time: '22:00', icon: '🚆', title: 'Отправление поезда', details: 'Петрозаводск — Москва' },
      { time: '06:30', icon: '🏁', title: 'Прибытие на Ленинградский вокзал', details: 'Москва (следующий день)' },
    ]
  },
]

const openFaq = ref(null)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

// Form state
const formName = ref('')
const formPhone = ref('')
const formEmail = ref('')
const formTelegram = ref('')
const formMax = ref('')
const formTask = ref('')
const formSubmitted = ref(false)

async function submitForm() {
  if (!formName.value || !formPhone.value || !formEmail.value) {
    formError.value = 'Пожалуйста, заполните имя, телефон и email'
    return
  }

  formSubmitting.value = true
  formError.value = ''

  try {
    const result = await submitContactFormWithNotification({
      name: formName.value,
      phone: formPhone.value,
      email: formEmail.value || '',
      telegram: formTelegram.value || '',
      max: formMax.value || '',
      service: 'MICE',
      source: 'mice-page',
      task: formTask.value,
      industry: '',
      dates: '',
    })

    if (result.success) {
      formSubmitted.value = true
    } else {
      formError.value = 'Произошла ошибка. Напишите мне напрямую в Telegram'
    }
  } catch (error) {
    formError.value = 'Произошла ошибка. Напишите мне напрямую в Telegram'
  } finally {
    formSubmitting.value = false
  }
}
</script>
