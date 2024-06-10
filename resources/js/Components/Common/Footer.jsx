import React from "react";

const Footer = () => {
    return (
        <footer class="bg-white border-t border-t-gray-300 mt-20">
            <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-12">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div class="flex justify-center text-secondary sm:justify-start">
                            <a
                                class="flex items-center gap-2 text-secondary text-xl font-semibold"
                                href="/"
                            >
                                <span class="pt-0.5">DJAWA STORE</span>
                            </a>
                        </div>
                        <p class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Incidunt consequuntur amet culpa cum itaque
                            neque.
                        </p>
                        <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                            <li>
                                <a href="/#">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        font-size="26"
                                        class="text-secondary transition hover:text-secondary/75"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        font-size="26"
                                        class="text-secondary transition hover:text-secondary/75"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        font-size="26"
                                        class="text-secondary transition hover:text-secondary/75"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        font-size="26"
                                        class="text-secondary transition hover:text-secondary/75"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">
                                About Us
                            </p>
                            <ul class="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Find Store
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Locations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Blogs &amp; News
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Affiliate Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">
                                Informations
                            </p>
                            <ul class="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Refund Queries
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Shipping QnA
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">
                                Support
                            </p>
                            <ul class="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-700 transition hover:text-gray-700/75"
                                        href="/"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">
                                Contact Us
                            </p>
                            <ul class="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            font-size="18"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"></path>
                                        </svg>
                                        <span class="flex-1 text-gray-700">
                                            john@doe.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            font-size="18"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                                        </svg>
                                        <span class="flex-1 text-gray-700">
                                            0123456789
                                        </span>
                                    </a>
                                </li>
                                <li class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        font-size="18"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                                    </svg>
                                    <address class="-mt-0.5 flex-1 not-italic text-gray-700">
                                        213 Lane, London, United Kingdom
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt-12 border-t border-gray-300 pt-6">
                    <div class="text-center sm:flex sm:justify-between sm:text-left">
                        <div class="text-sm text-gray-500 flex items-center gap-3">
                            <a
                                class="inline-block text-secondary transition hover:text-secondary/75"
                                href="/"
                            >
                                Terms &amp; Conditions
                            </a>
                            <a
                                class="inline-block text-secondary transition hover:text-secondary/75"
                                href="/"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            © 2024 DJAWA STORE
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
