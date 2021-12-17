export const Logo = ({width = 162, height = 62, color1 = 'black',color2='black' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 162 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1738 25.9277V20.8828C17.1738 20.1914 17.0391 19.541 16.7695 18.9316C16.5117 18.3105 16.1543 17.7715 15.6973 17.3145C15.2402 16.8574 14.7012 16.5 14.0801 16.2422C13.4707 15.9727 12.8203 15.8379 12.1289 15.8379C11.4375 15.8379 10.7812 15.9727 10.1602 16.2422C9.55078 16.5 9.01758 16.8574 8.56055 17.3145C8.10352 17.7715 7.74023 18.3105 7.4707 18.9316C7.21289 19.541 7.08398 20.1914 7.08398 20.8828V25.9277H17.1738ZM22.2188 36H17.1738V30.9551H7.08398V36H2.05664V20.8828C2.05664 19.4883 2.32031 18.1816 2.84766 16.9629C3.375 15.7324 4.08984 14.6602 4.99219 13.7461C5.90625 12.832 6.97266 12.1113 8.19141 11.584C9.42188 11.0566 10.7344 10.793 12.1289 10.793C13.5234 10.793 14.8301 11.0566 16.0488 11.584C17.2793 12.1113 18.3516 12.832 19.2656 13.7461C20.1797 14.6602 20.9004 15.7324 21.4277 16.9629C21.9551 18.1816 22.2188 19.4883 22.2188 20.8828V36ZM52.6978 36H47.3013L37.5806 19.4062V36H32.5357V10.793H37.9322L47.6529 27.4043V10.793H52.6978V36ZM68.3761 36H63.3312V10.793H68.3761V36ZM99.1716 28.4414C99.1716 29.4844 98.9723 30.4629 98.5739 31.377C98.1755 32.291 97.6305 33.0938 96.9391 33.7852C96.2595 34.4648 95.4626 35.0039 94.5485 35.4023C93.6345 35.8008 92.6559 36 91.613 36H79.0095V10.793H91.613C92.6559 10.793 93.6345 10.9922 94.5485 11.3906C95.4626 11.7891 96.2595 12.334 96.9391 13.0254C97.6305 13.7051 98.1755 14.502 98.5739 15.416C98.9723 16.3301 99.1716 17.3086 99.1716 18.3516C99.1716 18.8203 99.1071 19.3008 98.9782 19.793C98.8493 20.2852 98.6677 20.7598 98.4333 21.2168C98.1989 21.6738 97.9177 22.0898 97.5895 22.4648C97.2614 22.8398 96.8981 23.1504 96.4997 23.3965C96.9098 23.6191 97.279 23.9238 97.6071 24.3105C97.9352 24.6855 98.2165 25.1016 98.4509 25.5586C98.6852 26.0156 98.861 26.4961 98.9782 27C99.1071 27.4922 99.1716 27.9727 99.1716 28.4414ZM84.0544 30.9551H91.613C91.9645 30.9551 92.2927 30.8906 92.5973 30.7617C92.902 30.6328 93.1657 30.457 93.3884 30.2344C93.6227 30 93.8044 29.7305 93.9333 29.4258C94.0622 29.1211 94.1266 28.793 94.1266 28.4414C94.1266 28.0898 94.0622 27.7617 93.9333 27.457C93.8044 27.1523 93.6227 26.8887 93.3884 26.666C93.1657 26.4316 92.902 26.25 92.5973 26.1211C92.2927 25.9922 91.9645 25.9277 91.613 25.9277H84.0544V30.9551ZM84.0544 20.8828H91.613C91.9645 20.8828 92.2927 20.8184 92.5973 20.6895C92.902 20.5605 93.1657 20.3848 93.3884 20.1621C93.6227 19.9277 93.8044 19.6582 93.9333 19.3535C94.0622 19.0371 94.1266 18.7031 94.1266 18.3516C94.1266 18 94.0622 17.6719 93.9333 17.3672C93.8044 17.0625 93.6227 16.7988 93.3884 16.5762C93.1657 16.3418 92.902 16.1602 92.5973 16.0312C92.2927 15.9023 91.9645 15.8379 91.613 15.8379H84.0544V20.8828ZM133.623 23.502C133.623 24.6973 133.465 25.8516 133.149 26.9648C132.844 28.0664 132.41 29.1035 131.848 30.0762C131.285 31.0371 130.606 31.916 129.809 32.7129C129.012 33.5098 128.133 34.1953 127.172 34.7695C126.211 35.332 125.174 35.7656 124.061 36.0703C122.948 36.3867 121.793 36.5449 120.598 36.5449C119.403 36.5449 118.248 36.3867 117.135 36.0703C116.033 35.7656 114.996 35.332 114.024 34.7695C113.063 34.1953 112.184 33.5098 111.387 32.7129C110.59 31.916 109.905 31.0371 109.33 30.0762C108.768 29.1035 108.328 28.0664 108.012 26.9648C107.707 25.8516 107.555 24.6973 107.555 23.502C107.555 22.3066 107.707 21.1523 108.012 20.0391C108.328 18.9258 108.768 17.8887 109.33 16.9277C109.905 15.9668 110.59 15.0879 111.387 14.291C112.184 13.4941 113.063 12.8145 114.024 12.252C114.996 11.6895 116.033 11.2559 117.135 10.9512C118.248 10.6348 119.403 10.4766 120.598 10.4766C121.793 10.4766 122.948 10.6348 124.061 10.9512C125.174 11.2559 126.211 11.6895 127.172 12.252C128.133 12.8145 129.012 13.4941 129.809 14.291C130.606 15.0879 131.285 15.9668 131.848 16.9277C132.41 17.8887 132.844 18.9258 133.149 20.0391C133.465 21.1523 133.623 22.3066 133.623 23.502ZM128.614 23.502C128.614 22.4004 128.403 21.3633 127.981 20.3906C127.559 19.4062 126.985 18.5566 126.258 17.8418C125.543 17.1152 124.694 16.541 123.709 16.1191C122.737 15.6973 121.699 15.4863 120.598 15.4863C119.485 15.4863 118.442 15.6973 117.469 16.1191C116.496 16.541 115.647 17.1152 114.92 17.8418C114.194 18.5566 113.619 19.4062 113.198 20.3906C112.776 21.3633 112.565 22.4004 112.565 23.502C112.565 24.6035 112.776 25.6406 113.198 26.6133C113.619 27.5742 114.194 28.418 114.92 29.1445C115.647 29.8711 116.496 30.4453 117.469 30.8672C118.442 31.2891 119.485 31.5 120.598 31.5C121.699 31.5 122.737 31.2891 123.709 30.8672C124.694 30.4453 125.543 29.8711 126.258 29.1445C126.985 28.418 127.559 27.5742 127.981 26.6133C128.403 25.6406 128.614 24.6035 128.614 23.502ZM161.694 36H155.577L150.725 27.8613L145.856 36H139.774L147.509 23.3965L139.774 10.793H145.856L150.725 18.9316L155.577 10.793H161.694L153.96 23.3965L161.694 36Z"
        fill={color1}
      />
      <path
        d="M16.758 45.832L15.876 44.986C15.606 45.04 14.958 45.094 14.616 45.094H4.284C3.618 45.094 2.862 45.022 2.232 44.932V46.57C2.934 46.498 3.618 46.462 4.284 46.462H14.544C13.95 47.578 12.258 49.54 10.602 50.494L11.79 51.448C13.842 50.026 15.552 47.704 16.272 46.48C16.398 46.282 16.632 46.012 16.758 45.832ZM9.576 48.208H7.956C8.01 48.676 8.028 49.072 8.028 49.504C8.028 52.51 7.632 55.066 4.842 56.776C4.338 57.136 3.726 57.424 3.222 57.586L4.554 58.666C9.144 56.38 9.576 53.086 9.576 48.208ZM20.8524 46.282V47.902C21.4104 47.884 22.0044 47.848 22.6344 47.848H30.3384C30.9324 47.848 31.6164 47.866 32.1204 47.902V46.282C31.6164 46.336 30.9864 46.354 30.3384 46.354H22.6344C22.0404 46.354 21.4284 46.318 20.8524 46.282ZM19.3044 55.192V56.92C19.9164 56.884 20.5464 56.83 21.1944 56.83H31.9764C32.4624 56.83 33.0744 56.866 33.6144 56.92V55.192C33.0924 55.246 32.5164 55.282 31.9764 55.282H21.1944C20.5464 55.282 19.9164 55.228 19.3044 55.192ZM50.2284 44.896L48.5724 44.32C48.5004 44.716 48.3384 45.292 48.2124 45.652C47.6724 47.182 46.9344 48.892 45.7644 50.566C44.3424 49.468 42.2544 47.992 40.7064 47.002L39.7704 48.136C41.4984 49.216 43.5144 50.692 44.8464 51.772C43.0644 53.95 40.8504 55.948 37.7004 57.424L38.9424 58.558C42.0744 56.92 44.3064 54.778 45.9984 52.744C47.5464 54.076 48.9144 55.354 50.2464 56.884L51.3804 55.642C50.1024 54.256 48.5544 52.852 46.9344 51.52C48.1404 49.774 49.0404 47.794 49.6344 46.21C49.7784 45.832 50.0304 45.22 50.2284 44.896ZM67.4184 43.6L66.4644 44.014C66.9504 44.68 67.5624 45.778 67.9224 46.498L68.8944 46.066C68.5164 45.328 67.8684 44.248 67.4184 43.6ZM69.3984 42.88L68.4444 43.294C68.9484 43.96 69.5424 44.986 69.9384 45.76L70.9104 45.328C70.5684 44.662 69.8664 43.546 69.3984 42.88ZM62.5764 44.464L60.9204 43.906C60.8124 44.374 60.5424 45.022 60.3624 45.346C59.5704 46.948 57.8064 49.576 54.7104 51.43L55.9524 52.348C57.9324 51.052 59.4264 49.45 60.5244 47.92H66.5904C66.2304 49.558 65.1144 51.898 63.7284 53.536C62.0904 55.462 59.8404 57.082 56.5284 58.054L57.8424 59.242C61.2084 57.982 63.3684 56.344 65.0064 54.346C66.6084 52.384 67.7064 49.954 68.1924 48.136C68.2824 47.848 68.4624 47.434 68.6064 47.182L67.4184 46.462C67.1304 46.57 66.7344 46.624 66.2484 46.624H61.3704C61.5144 46.372 61.6584 46.12 61.7844 45.868C61.9644 45.544 62.2884 44.932 62.5764 44.464ZM80.3424 47.632L79.0284 48.082C79.4064 48.892 80.2344 51.178 80.4324 51.988L81.7644 51.52C81.5304 50.728 80.6484 48.352 80.3424 47.632ZM86.8584 48.64L85.3104 48.154C85.0404 50.458 84.1044 52.744 82.8264 54.31C81.3504 56.164 79.0644 57.532 76.9764 58.144L78.1644 59.35C80.1804 58.576 82.3764 57.19 84.0324 55.066C85.3284 53.446 86.1024 51.52 86.5884 49.54C86.6604 49.306 86.7324 49.018 86.8584 48.64ZM76.1664 48.532L74.8344 49.054C75.1944 49.684 76.1664 52.168 76.4364 53.104L77.8044 52.6C77.4624 51.664 76.5264 49.306 76.1664 48.532ZM103.274 43.348L102.32 43.762C102.806 44.464 103.4 45.526 103.76 46.246L104.732 45.814C104.39 45.112 103.724 44.014 103.274 43.348ZM105.308 42.718L104.372 43.132C104.858 43.798 105.452 44.824 105.848 45.598L106.82 45.166C106.478 44.5 105.794 43.384 105.308 42.718ZM103.688 46.282L102.77 45.58C102.482 45.67 102.014 45.724 101.42 45.724H94.4724C93.9324 45.724 92.9064 45.652 92.6544 45.616V47.236C92.8524 47.218 93.8424 47.146 94.4724 47.146H101.492C101.042 48.64 99.7284 50.782 98.5044 52.168C96.6504 54.238 93.9864 56.38 91.0884 57.514L92.2404 58.72C94.9044 57.496 97.3344 55.534 99.2604 53.446C101.096 55.102 103.004 57.208 104.21 58.81L105.47 57.712C104.3 56.308 102.104 53.968 100.214 52.348C101.492 50.728 102.626 48.622 103.238 47.056C103.346 46.822 103.58 46.426 103.688 46.282ZM111.374 56.038C112.4 56.758 113.606 57.838 114.164 58.576L115.226 57.766C114.614 57.028 113.408 56.002 112.364 55.318L111.374 56.038ZM111.662 50.134H115.946V51.592H111.662V50.134ZM111.662 47.722H115.946V49.18H111.662V47.722ZM121.652 47.722V49.18H117.242V47.722H121.652ZM121.652 51.592H117.242V50.134H121.652V51.592ZM124.676 53.968H120.608V52.6H122.966V46.75H117.242V45.526H124.262V44.374H117.242V42.97H115.946V44.374H109.088V45.526H115.946V46.75H110.402V52.6H119.312V53.968H108.638V55.12H119.312V57.928C119.312 58.18 119.204 58.252 118.898 58.27C118.61 58.288 117.494 58.288 116.306 58.252C116.486 58.594 116.684 59.08 116.756 59.422C118.286 59.422 119.258 59.422 119.852 59.224C120.446 59.044 120.608 58.702 120.608 57.964V55.12H124.676V53.968ZM132.488 44.914V46.48H128.672V44.914H132.488ZM128.672 49.234V47.506H132.488V49.234H128.672ZM133.748 43.78H127.358V59.368H128.672V50.35H133.748V43.78ZM136.7 49.252V47.506H140.696V49.252H136.7ZM140.696 44.914V46.48H136.7V44.914H140.696ZM142.046 43.78H135.422V50.368H140.696V57.532C140.696 57.892 140.57 57.982 140.246 58C139.868 58.018 138.644 58.036 137.42 57.964C137.618 58.342 137.834 58.972 137.906 59.35C139.526 59.35 140.588 59.314 141.218 59.098C141.812 58.882 142.046 58.45 142.046 57.532V43.78ZM157.922 57.478H150.146V54.022H157.922V57.478ZM154.448 46.912H153.098V52.834H148.832V59.386H150.146V58.684H157.922V59.35H159.272V52.834H154.448V50.26H160.478V49.054H154.448V46.912ZM153.854 45.256V42.952H152.486V45.256H145.88V49.9C145.88 52.456 145.736 56.056 144.278 58.63C144.602 58.774 145.178 59.152 145.412 59.386C146.942 56.668 147.194 52.636 147.194 49.9V46.534H160.73V45.256H153.854Z"
        fill={color2}
      />
    </svg>
  );
};