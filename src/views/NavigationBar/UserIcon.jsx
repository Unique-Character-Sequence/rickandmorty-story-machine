import Button from "@mui/material/Button";

const UserIcon = props => (
    props.userPfp !== undefined ?
        <img
            style={{borderRadius: "8px"}}
            src={props.userPfp} alt=""/> :
        <Button variant="outlined">Sign In</Button>
);

export default UserIcon;