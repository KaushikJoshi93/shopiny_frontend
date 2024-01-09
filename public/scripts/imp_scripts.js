function handleOnlineStatus() {
  if (navigator.onLine) {
    window.location.reload();
  } else {
    const htmlText = `
      <div style="width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;">
          <div style="display:flex;width:120px;">
            <svg viewBox="0 0 192 195" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
            <defs>
              <path d="M0 194.555V.675h191.961v193.88z"></path>
              <path d="M.668 18.586C8.545 12.047 15.125 3.19 25.082.49v20.673H.668v-2.577z"></path>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path d="M63.227 57.833s-4.403 1.068-5.938 1.483c-1.456.393-4.553 1.79-4.443 6.532.112 4.74.112 4.463.223 5.85.11 1.389 1.11 3.444 3.053 3.999 1.944.555 2.834 1.777 2.444 6.386-.389 4.609 17.055-6.552 17.055-6.552l-5.41-15.82-6.984-1.878z" fill="#DDD"></path>
              <g transform="translate(0 -.341)">
                <mask fill="#fff">
                  <use xlink:href="#a"></use>
                </mask>
                <path d="M96.24.675c-17.36 0-24.86 17.956-38.835 24.25-9.382 4.226-31.732.669-39.879 14.75C9.38 53.757 20.86 65.52 15.12 74.544 9.38 83.568-.48 85.263.02 99.774c.5 14.51 20.374 19.494 22.32 30.4 1.946 10.908-4.853 13.059 0 28.997s18.193 17.626 35.867 18.065c17.673.439 14.368 12.34 32.52 16.64 18.153 4.299 29.831-13.08 43.992-16.64 14.161-3.561 24.004.189 32.504-11.311 8.5-11.5-2.77-30.212 3.23-38.855 6-8.643 22.896-13.127 21.418-30.728-1.167-13.883-11.99-16.16-15.24-26.777-3.438-11.225 4.75-21.285-4.25-33.253-10.85-14.428-29.882-3.073-41.805-14.656C118.653 10.072 113.88.675 96.24.675" fill="#6F38D4" mask="url(#b)"></path>
              </g>
              <path d="M127.519 54.153c1.374-2.688 3.936-3.375 6.061-3.375h31.375c2.188 0 5.418 2.011 3.625 5.875-1.75 3.77-8.833 17.628-9.812 19.625-.9 1.834-2.5 3.562-6.25 3.562h-33.124c-2.5 0-4.064-2.812-2.189-6.5 1.876-3.687 10.314-19.187 10.314-19.187" fill="#282828"></path>
              <path fill="#FF76DA" d="M132.08 54.522h32.314L153.518 75.96h-33.224z"></path>
              <path d="M130.91 72.181c1.96-.157 2.745.471 5.414 0 2.67-.47 3.141-2.617 5.025-2.722 1.884-.105 4.45-.366 6.543-2.04 2.094-1.676 2.827-4.608 1.1-6.073-1.729-1.466-2.723-.262-4.397-.785-1.675-.524-.733-2.513-2.879-3.036-2.147-.524-3.664.471-5.078-.105-1.262-.514-2.104-1.039-2.532-2.898h-2.025L120.294 75.96h4.83c.918-1.467 3.824-3.622 5.785-3.779" fill="#FFD61D"></path>
              <path fill="#FFF771" d="M149.736 64.156l-20.166-5.068-5.573 10.135 23.96-2.388z"></path>
              <path fill="#FFF" d="M148.02 63.81l-18.033 1.087 17.456 2.105z"></path>
              <path d="M166.335 155.314c-7.65-5.535-13.913.717-21.104-6.867-7.19-7.584-.204-10.69-9.321-18.884-9.118-8.193-13.5.819-19.298-4.991-5.797-5.811-2.957-14.741-8.792-20.643-5.834-5.903-16.191.678-22.72-5.88-6.528-6.555-1.388-14.961-9.761-19.945-8.372-4.985-15.748 1.04-21.691-4.531-6.12-5.74-2.37-14.698-9.37-19.05-6.645-4.131-12.298-.594-18.355-3.744-5.782-3.007-7.52-8.195-6.902-13.63a18.305 18.305 0 00-1.495 2.185c-8.147 14.08 3.333 25.845-2.407 34.869-5.74 9.024-15.6 10.719-15.1 25.23.5 14.51 20.374 19.494 22.32 30.4 1.947 10.908-4.853 13.059 0 28.997s18.193 17.626 35.867 18.065c17.673.439 14.368 12.34 32.52 16.64 18.153 4.299 29.832-13.08 43.993-16.64 14.16-3.561 24.004.189 32.504-11.311 1.397-1.891 2.253-3.98 2.746-6.183-.978-1.607-2.172-3.03-3.634-4.087" fill="#4620AE"></path>
              <path d="M35.996 149.688c-2.405-27.576 22.517-52.274 55.666-55.167 38.958-3.398 61.973 17.118 64.378 44.693 2.406 27.576-22.517 52.275-55.666 55.167-33.149 2.892-61.972-17.118-64.378-44.693" fill="#BD79FF"></path>
              <path d="M86.795 123.632c.465 4.071-3.06 7.3-7.8 7.84-4.74.542-9.502-1.3-10.046-6.06-.465-4.072 3.729-7.22 8.468-7.762 4.74-.542 8.869 1.528 9.378 5.982M143.194 136.755c.405 3.685-2.99 6.613-7.52 7.112-4.532.498-9.062-1.16-9.537-5.47-.405-3.685 3.628-6.542 8.16-7.041 4.531-.498 8.454 1.368 8.897 5.399M132.987 159.146c.488 4.187-3.937 7.61-9.808 8.294-5.872.685-11.72-1.087-12.292-5.983-.488-4.186 4.763-7.545 10.634-8.23 5.871-.685 10.932 1.34 11.466 5.92M111.496 185.225c-5.791-4.012-1.343-13.936-7.953-16.37-6.611-2.436-13.361 5.055-18.123-2.686-3.035-4.933 2.563-10.26-3.661-15.454-6.225-5.193-13.257 3.38-18.386-.189-5.128-3.568 1.68-10.789-3.346-16.624-5.026-5.835-13.957 1.822-19.095-2.435-1.026-.849-1.173-2.245-1.072-3.56-3.1 6.776-4.528 14.168-3.864 21.781 2.406 27.575 31.229 47.585 64.378 44.693 10.788-.94 20.694-4.203 29.081-9.11-4.525 2.412-12.183 3.956-17.959-.046" fill="#9A4DFF"></path>
              <path d="M101.622 77.33c5.125 9.375 20.396 11.317 28.646 2.505h-5.5c-1.375 0-1.5-2.063-.75-2.688s2.688-1.312 1.938-2.875c-.75-1.562-3.063-.125-5.625.5-2.563.625-5.5.267-7.5-.937-1.557-.937-4.188-3.438-4.563-10.063-.286-5.054-6.646 13.558-6.646 13.558" fill="#EEE"></path>
              <path d="M67.394 83.835s-.75 8-.876 11.5c-.124 3.5-.874 9.625 5 12.25 5.876 2.625 7 3.375 8.626 4.625 1.624 1.25 3.188 2.937 3.561 5.375.376 2.438-.436 9.188 0 12 .439 2.813 1 3.75 1 3.75h20.48c3.105-6.75-2.553-6.375-4.442-5.935-1.995.466-2.766-1.002-2.078-2.94.686-1.937 3.43-10.182 1.082-14.5-1.938-3.563-5.791-6.094-5.166-7.813.55-1.511 2.727-.812 5.644-.062 2.919.75 5.544 1.562 7.482 2.75 1.937 1.187 2.603 3.372 1.978 6.874-.626 3.5-1.063 7.814-.626 10.126.439 2.313 1 3.375 1 3.375h20.084c2.292-4.833-1-6.542-4.084-5.833-2.082.479-3.602-.854-3.165-2.917.438-2.063 3-9.125 3-13.438 0-4.312-1.793-9.562-7.876-11.854-5.528-2.082-15-4.833-13.5-13.166 1.5-8.334 1.584-10.584 3.334-12.667s9.041-5.875 11.522-12.572c2.706-7.3-.522-14.428-10.19-17.844-9.665-3.417-23.901-3.907-37.25 1.916-12.415 5.417-21.415 17.584-5.915 26.5 10.587 6.09 1.374 20.5 1.374 20.5" fill="#FFF"></path>
              <path d="M69.02 65.847s1.286 1.658-1.579 5.381c-1.798 2.337-9.923 9.606-12.007 12.19-2.083 2.583-5.083 8-5 14 .084 6 1.417 8.25-.833 11.5s-4.276 5.325-3.222 7.121c1.055 1.795 9.805-5.205 9.805-5.205s-.925 3.417 1.08 3.25c2.004-.166 5.254-4.583 5.504-9.666.25-5.084.344-8.433 3.927-12.183 3.584-3.75 7.66-9.05 6.49-16.65-.667-4.334-.915-7.655-4.165-9.738" fill="#EEE"></path>
              <path d="M75.621 52.085c2.147 10.817 16.602 13.624 26.001 13.083 4.385-.251 7.945-1.781 10.578-3.436 2.662-2.165 5.731-5.073 7.175-8.97 2.704-7.298-.524-14.427-10.191-17.844-2.557-.904-5.442-1.595-8.539-2.026-13.794-1.325-27.452 6.957-25.024 19.193" fill="#DDD"></path>
              <path d="M105.5 38.136c-2.586-.818-5.441-1.595-8.538-2.026-6.697-.643-13.357.983-18.165 4.222-2.746 3.17-4.082 7.186-3.176 11.753 2.148 10.817 16.602 13.624 26 13.083 4.145-.238 5.92-.656 8.505-2.203 3.395-2.095 4.27-6.633 4.265-10.714-.006-4.312.166-11.25-8.89-14.115" fill="#FF76DA"></path>
              <path d="M97.283 57.765s.792 2.836 3.21 2.836c2.707 0 3.25-2.836 3.25-2.836" stroke="#4620AE" stroke-width="1.5" stroke-linecap="round"></path>
              <path d="M86.706 70.952c-2.188 0-3.75 1.902-4.062 3.589-.313 1.688 1.062 3.563 3.19 3.563 2.091 0 3.688-1.25 4.061-3.313.374-2.062-.876-3.84-3.189-3.84" fill="#FF76DA"></path>
              <path d="M96.41 71.51h4.452c.625 0 .988.812.76 1.719a84.627 84.627 0 00-.697 3.156c-.125.625-.657.906-1.344.906h-4.53c-.595 0-1.064-.594-.876-1.47.187-.873.515-2.78.765-3.467.25-.688.625-.844 1.47-.844" fill="red"></path>
              <path d="M94.943 79.511h4.453c.625 0 .99.812.761 1.72-.23.905-.19.628-.315 1.253-.125.625-.656.906-1.343.906h-4.532c-.593 0-1.062-.593-.875-1.468.188-.875.132-.88.382-1.567.25-.688.625-.844 1.47-.844" fill="#00D4B5"></path>
              <path d="M101.204 49.454c-.329 2.401-1.975 4.056-3.728 4.068-1.752.013-3.224-1.365-2.839-4.173.329-2.402 2.204-3.968 3.956-3.98 1.753-.012 2.971 1.458 2.611 4.085" fill="#FFF"></path>
              <path d="M101.204 49.454c.343-2.503-.753-3.939-2.371-4.06l-2.957 7.671a2.834 2.834 0 001.6.457c1.753-.012 3.399-1.667 3.728-4.068" fill="#4620AE"></path>
              <path d="M104.177 49.44c.329-2.402 1.976-4.057 3.729-4.069 1.75-.012 3.223 1.365 2.838 4.174-.33 2.401-2.203 3.967-3.956 3.98-1.753.012-2.97-1.458-2.611-4.085" fill="#FFF"></path>
              <path d="M110.744 49.549c.362-2.643-.92-4.018-2.532-4.161l-2.951 7.657c.426.313.943.488 1.527.484 1.753-.012 3.627-1.578 3.956-3.98M87.91 45.315c.562-3.03 2.388-5.916 5.08-5.916h15.45a24.551 24.551 0 00-2.939-1.263c-2.558-.904-5.443-1.595-8.539-2.026-6.698-.643-13.358.983-18.165 4.222-2.746 3.17-4.082 7.186-3.176 11.753.658 3.317 2.477 5.877 4.95 7.823 5.04-4.733 6.904-12.245 7.34-14.593" fill="#4620AE"></path>
              <path d="M83.706 129.585c.437 2.813 1 3.75 1 3.75h20.479c3.104-6.75-2.552-6.375-4.442-5.935-1.996.466-2.766-1.003-2.079-2.94a40.677 40.677 0 001.519-5.488H83.801c.059 3.017-.466 8.227-.095 10.613M109.684 111.708c-.624 3.501-1.061 7.814-.624 10.126.438 2.313 1 3.375 1 3.375h20.083c2.292-4.833-1-6.54-4.084-5.833-2.082.48-3.603-.854-3.165-2.917.197-.937.837-2.91 1.474-5.188h-14.622c-.022.148-.034.285-.061.437" fill="#EEE"></path>
              <path d="M85.223 132.604h19.812a1.063 1.063 0 110 2.125H85.223a1.062 1.062 0 010-2.125M110.556 124.604h19.812a1.063 1.063 0 110 2.125h-19.812a1.062 1.062 0 010-2.125M49.602 108.918c-2.25 3.25-4.276 5.326-3.222 7.121 1.054 1.796 9.804-5.204 9.804-5.204s-.924 3.416 1.08 3.25c2.005-.167 5.255-4.584 5.505-9.667.102-2.075.181-3.859.479-5.502H50.486c.242 4.898 1.167 7.04-.884 10.002M150.654 62.194c-1.233 1.457-2.734 2.486-4.527 3.286-.459.206-.51.838-.077 1.094 1.025.605 1.386 1.649 1.505 2.937a.618.618 0 001.088.349c1.381-1.58 2.95-2.694 4.694-3.44.434-.186.523-.777.14-1.053-1.006-.725-1.563-1.695-1.748-2.895-.079-.508-.742-.672-1.075-.278" fill="#FFF"></path>
              <path d="M152.672 63.118c-1.558.43-2.922.342-4.232-.116-.414-.144-.874.147-.844.584.105 1.497-.647 2.935-1.778 4.463-.355.479.09 1.12.667.967 1.686-.45 3.12-.401 4.36.063.39.145.816-.102.843-.516.097-1.57.66-3.047 1.633-4.482.32-.473-.1-1.115-.65-.963M130.268 79.839h-5.5c-1.375 0-1.5-2.063-.75-2.688s2.688-1.312 1.938-2.874c-.75-1.563-3.063-.125-5.625.5a11.12 11.12 0 01-5.16-.011l-5.046 9.582c6.893 2.464 17.022 1.17 20.143-4.51M57.805 89.604c2.353-3.097 1.502-7.375.834-9.547-1.391 1.37-2.575 2.58-3.204 3.36-1.532 1.9-3.556 5.336-4.488 9.406 2.04-.07 4.922-.672 6.858-3.22" fill="#FFF"></path>
              <path d="M91.184 111.492c-.596 2.674 3.376 5.067 9.437 4.404.168-2.171.002-4.326-.873-5.936-.444-.814-.988-1.572-1.555-2.281-3.201.24-6.453 1.326-7.008 3.813M116.437 98.588c-.598 2.677 3.384 5.072 9.455 4.402-.006-2.685-.706-5.73-2.704-8.194-3.117.278-6.21 1.371-6.75 3.791" fill="#EEE"></path>
              <path d="M24.872 84.989c.476 1.649-.427 3.134-1.944 3.57-1.515.437-3.227-.103-3.784-2.032-.474-1.65.655-3.131 2.17-3.568 1.515-.437 3.038.225 3.558 2.03M41.888 74.31c.947 3.286-1.01 6.286-4.222 7.212-3.213.926-6.807-.096-7.914-3.937-.947-3.284 1.487-6.288 4.699-7.214 3.213-.926 6.402.347 7.437 3.94" fill="#BD79FF"></path>
              <g transform="translate(65 .659)">
                <mask fill="#fff">
                  <use xlink:href="#c"></use>
                </mask>
                <path d="M24.617 6.552c1.838 6.374-1.958 12.195-8.192 13.992-6.235 1.797-13.207-.185-15.356-7.638-1.837-6.374 2.885-12.202 9.12-14 6.234-1.796 12.42.674 14.428 7.646" fill="#BD79FF" mask="url(#d)"></path>
              </g>
              <g fill="#BD79FF">
                <path d="M164.33 92.07c2.266 2.426 2.012 5.775-.217 7.858-2.228 2.082-5.652 2.653-8.303-.183-2.266-2.426-1.621-5.97.609-8.053 2.228-2.082 5.432-2.275 7.911.378"></path>
                <path d="M169.264 87.026c-1.634 0-7.03 5.042-9.735 7.569-7.73 7.221-9.117 9.51-8.92 10.159 1.03 1.026 6.113-3.715 9.816-7.186l2.438-2.273c3.522-3.269 6.848-6.357 6.876-7.801a.439.439 0 00-.138-.349c-.081-.081-.194-.119-.337-.119m-18.335 19.338a1.89 1.89 0 01-1.397-.576c-.201-.2-.437-.555-.427-1.111.03-1.752 2.665-4.886 9.4-11.178 6.295-5.882 10.253-9.32 12.156-7.414.388.387.587.884.577 1.437-.038 2.082-3.108 4.93-7.355 8.872l-2.432 2.269c-4.63 4.339-8.217 7.701-10.522 7.701M113.169 17.511c.507 1.758-.456 3.34-2.071 3.806-1.616.465-3.44-.11-4.033-2.166-.506-1.759.698-3.338 2.313-3.804 1.615-.465 3.236.241 3.79 2.164M170.296 109.446c.308 1.065-.275 2.023-1.255 2.306-.978.28-2.084-.067-2.442-1.313-.308-1.065.422-2.021 1.4-2.304.979-.282 1.96.146 2.297 1.31M33.03 107.177c.306 1.065-.277 2.023-1.256 2.306-.978.281-2.083-.067-2.442-1.313-.307-1.065.422-2.022 1.4-2.304.98-.282 1.961.146 2.297 1.311"></path>
              </g>
            </g>
          </svg>
        </div>
        <div>
          No internet connection
        </div>
        <button
              onclick="window.location.reload()"
              style="background:#ec4899;color:white;padding:9px;border-radius:14px;font-size:14px;"
            >
              Retry
        </button>
      </div>
    
    `
    const elem = document.querySelector(".main-content");
    elem.innerHTML = htmlText
  }
}

// Add event listener for online status change
window.addEventListener("online", handleOnlineStatus);

// Add event listener for offline status change
window.addEventListener("offline", handleOnlineStatus);

  