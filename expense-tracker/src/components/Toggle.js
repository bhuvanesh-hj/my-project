import "./Toggle.css";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { premiumActions } from "../store/PremiumReducers";

function Toggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.premium.darkMode);
  return (
    <>
      <div id="darkmode">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={() => dispatch(premiumActions.darkMode())}
          checked={darkMode}
        />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" size="10px" />
          <BsFillSunFill color="yellow" size="12px" />
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
}

export default Toggle;
