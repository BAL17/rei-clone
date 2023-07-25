import "./Masthead.css";

const Masthead = () => {
  return (
    <div id="Masthead">
      <div id="masthead-left">
        <a href="https://www.rei.com/">
          <img>{/*The OEI logo*/}</img>
          <p>The OEI Logo</p>
        </a>
        <a href="https://www.rei.com/">
          <h3>Shop</h3>
        </a>
      </div>

      <div id="masthead-center">
        <form>
          <input
            type="text"
            placeholder="Search for great gear & clothing"
          ></input>
          <button>🔍</button>
        </form>
      </div>

      <div id="masthead-right">
        <ul id="mastead-actions">
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
              >
                <path
                  d="M8.98486 0.195557C11.1066 0.195557 13.1414 1.03841 14.6417 2.5387C16.142 4.03899 16.9849 6.07382 16.9849 8.19556C16.9849 11.0056 14.5569 14.9086 9.70086 19.8936C9.60728 19.9884 9.4958 20.0637 9.37289 20.115C9.24998 20.1664 9.11808 20.1929 8.98486 20.1929C8.85164 20.1929 8.71975 20.1664 8.59684 20.115C8.47393 20.0637 8.36244 19.9884 8.26886 19.8936C3.41286 14.9086 0.984863 11.0066 0.984863 8.19556C0.984863 6.07382 1.82772 4.03899 3.32801 2.5387C4.8283 1.03841 6.86313 0.195557 8.98486 0.195557ZM8.98486 2.19556C7.39356 2.19556 5.86744 2.8277 4.74222 3.95292C3.617 5.07813 2.98486 6.60426 2.98486 8.19556C2.98486 10.2086 4.95286 13.4776 8.98486 17.7476C13.0169 13.4776 14.9849 10.2086 14.9849 8.19556C14.9849 6.60426 14.3527 5.07813 13.2275 3.95292C12.1023 2.8277 10.5762 2.19556 8.98486 2.19556ZM8.98486 6.69556C9.38269 6.69556 9.76422 6.85359 10.0455 7.1349C10.3268 7.4162 10.4849 7.79773 10.4849 8.19556C10.4849 8.59338 10.3268 8.97491 10.0455 9.25622C9.76422 9.53752 9.38269 9.69556 8.98486 9.69556C8.58704 9.69556 8.20551 9.53752 7.9242 9.25622C7.6429 8.97491 7.48486 8.59338 7.48486 8.19556C7.48486 7.79773 7.6429 7.4162 7.9242 7.1349C8.20551 6.85359 8.58704 6.69556 8.98486 6.69556Z"
                  fill="#616161"
                />
              </svg>
              <div>
                <span>My REI Open til 8pm</span>
                <span>Silverdale</span>
              </div>
            </button>
          </li>
          <li>
            <div>
              <a href="https://www.rei.com/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M9.66523 9.19567C10.5935 9.19567 11.4837 8.82693 12.1401 8.17055C12.7965 7.51417 13.1652 6.62393 13.1652 5.69567C13.1652 4.76742 12.7965 3.87718 12.1401 3.2208C11.4837 2.56442 10.5935 2.19567 9.66523 2.19567C8.73697 2.19567 7.84673 2.56442 7.19035 3.2208C6.53398 3.87718 6.16523 4.76742 6.16523 5.69567C6.16523 6.62393 6.53398 7.51417 7.19035 8.17055C7.84673 8.82693 8.73697 9.19567 9.66523 9.19567ZM16.4272 16.1957C15.9833 14.7486 15.0869 13.4821 13.8697 12.5823C12.6526 11.6825 11.1789 11.197 9.66523 11.197C8.15159 11.197 6.67788 11.6825 5.46071 12.5823C4.24355 13.4821 3.34713 14.7486 2.90323 16.1957H16.4272ZM1.66523 18.1957C1.40001 18.1957 1.14566 18.0903 0.95812 17.9028C0.770583 17.7152 0.665226 17.4609 0.665226 17.1957H0.657227C0.663425 17.1426 0.670092 17.0896 0.677227 17.0367C0.890992 15.478 1.50607 14.0016 2.46217 12.7523C3.41828 11.5029 4.6826 10.5233 6.13123 9.90967C5.26624 9.18433 4.6454 8.2104 4.35297 7.12008C4.06054 6.02975 4.1107 4.87586 4.49662 3.81502C4.88254 2.75418 5.58555 1.83778 6.5102 1.19023C7.43485 0.542667 8.53637 0.195312 9.66523 0.195312C10.7941 0.195312 11.8956 0.542667 12.8203 1.19023C13.7449 1.83778 14.4479 2.75418 14.8338 3.81502C15.2198 4.87586 15.2699 6.02975 14.9775 7.12008C14.6851 8.2104 14.0642 9.18433 13.1992 9.90967C14.6728 10.534 15.9552 11.5367 16.9165 12.8162C17.8778 14.0957 18.4838 15.6065 18.6732 17.1957H18.6652C18.6652 17.4609 18.5599 17.7152 18.3723 17.9028C18.1848 18.0903 17.9304 18.1957 17.6652 18.1957H1.66523Z"
                    fill="#616161"
                  />
                </svg>
                <span>Sign In</span>
              </a>
            </div>
          </li>
          <li>
            <a href="https://www.rei.com/ShoppingCart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M10.2446 18.6956C10.5761 18.6956 10.8941 18.8273 11.1285 19.0617C11.3629 19.2961 11.4946 19.614 11.4946 19.9456C11.4946 20.2771 11.3629 20.595 11.1285 20.8294C10.8941 21.0639 10.5761 21.1956 10.2446 21.1956C9.91311 21.1956 9.59517 21.0639 9.36075 20.8294C9.12633 20.595 8.99463 20.2771 8.99463 19.9456C8.99463 19.614 9.12633 19.2961 9.36075 19.0617C9.59517 18.8273 9.91311 18.6956 10.2446 18.6956ZM17.7446 18.6956C18.0761 18.6956 18.3941 18.8273 18.6285 19.0617C18.8629 19.2961 18.9946 19.614 18.9946 19.9456C18.9946 20.2771 18.8629 20.595 18.6285 20.8294C18.3941 21.0639 18.0761 21.1956 17.7446 21.1956C17.4131 21.1956 17.0952 21.0639 16.8607 20.8294C16.6263 20.595 16.4946 20.2771 16.4946 19.9456C16.4946 19.614 16.6263 19.2961 16.8607 19.0617C17.0952 18.8273 17.4131 18.6956 17.7446 18.6956ZM6.99463 3.19556C7.31163 3.19556 7.59463 3.34256 7.77663 3.57256C7.86163 3.67756 7.92663 3.80256 7.96363 3.94156L8.56763 6.19556H20.9946C21.198 6.19556 21.3966 6.25758 21.5638 6.37336C21.7311 6.48914 21.859 6.65317 21.9306 6.84356C22.0036 7.03356 22.0196 7.24756 21.9626 7.45956L20.3556 13.4576C20.295 13.6838 20.1569 13.8817 19.9654 14.0165C19.7739 14.1514 19.5411 14.2148 19.3076 14.1956H10.1626L9.76063 15.6956H18.9946C19.2598 15.6956 19.5142 15.8009 19.7017 15.9885C19.8893 16.176 19.9946 16.4303 19.9946 16.6956C19.9946 16.9608 19.8893 17.2151 19.7017 17.4027C19.5142 17.5902 19.2598 17.6956 18.9946 17.6956H8.46463C8.28973 17.6955 8.1179 17.6496 7.96629 17.5624C7.81469 17.4752 7.6886 17.3497 7.60063 17.1986C7.53213 17.0839 7.48737 16.9567 7.46899 16.8244C7.45061 16.6921 7.45899 16.5575 7.49363 16.4286L8.36663 13.1706L6.23063 5.19556H4.99463C4.72941 5.19556 4.47506 5.0902 4.28752 4.90266C4.09999 4.71513 3.99463 4.46077 3.99463 4.19556C3.99463 3.93034 4.09999 3.67599 4.28752 3.48845C4.47506 3.30091 4.72941 3.19556 4.99463 3.19556H6.99463ZM19.6946 8.19556H9.10463L10.1756 12.1956H18.6226L19.6946 8.19556Z"
                  fill="#4E4D49"
                />
              </svg>
              <span>Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Masthead;