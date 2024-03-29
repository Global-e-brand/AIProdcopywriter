import { useState } from "react";
import { eyeClosedIcon, eyeOpenIcon } from "../../assets";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./authentication.css";

export const SecureInput = (props) => {
  const [inputIsVisible, setInputVisibility] = useState(false);

  const toggleVisibility = () => {
    setInputVisibility(!inputIsVisible);
  };

  return (
    <FormControl className="w-100 form-input" disabled={props.disabled}>
      <InputLabel size="small" htmlFor="input" error={props.error}>
        {props.title}
      </InputLabel>
      <OutlinedInput
        size="small"
        type={inputIsVisible ? "text" : "password"}
        error={props.error}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle input visibility"
              onClick={toggleVisibility}
              edge="end"
              disabled={props.disabled}
              tabIndex={-1}
            >
              {inputIsVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        onChange={(e) => props.setValue(e.target.value)}
        label={props.title}
        autoComplete={props.autoComplete || ""}
        value={props.value}
        autoFocus={props.autoFocus}
      />
    </FormControl>
  );
};
