import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux";
import MenuIcon from "@mui/icons-material/Menu";
import { authAPI } from "../../API/auth";
import { clearUser } from "../../redux/userSlice";
import { useToast } from "../../hooks/useToast";

function Appbar() {
	const user = useAppSelector((state) => state.user.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { alertError, alertInfo, alertSuccess, alertWarning } = useToast();
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const navigateTo = (href: string) => {
		navigate(href);
		handleCloseNavMenu();
		handleCloseUserMenu();
	};

	const handleHome = () => {
		if (user?.role === "CUSTOMER") {
			navigateTo("/customer");
		} else if (user?.role === "APE") {
			navigateTo("/APE");
		} else if (user?.role === "PLANTER") {
			navigateTo("/sukau");
		}
	};

	const logout = () => {
		authAPI.logout().then((res) => {
			dispatch(clearUser());
			alertSuccess("Logged out successfully!");
      navigateTo("/");
		});
	};
	console.log(user);
	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					{/* Logo on Large Screen */}
					<Button
						onClick={() => navigateTo("/")}
						className='hidden md:flex'
					>
						<img
							src='/images/APELogo.png'
							alt='ForestAPE Logo'
							className='mr-3 w-11 h-11 p-1 rounded-full bg-white'
						/>

						<Typography className="text-white normal-case font-bold text-xl md:flex font-['Cantora_One']">
							ForestAPE
						</Typography>
					</Button>

					{/* Pages Menu on Small Screen */}
					<Box className='grow flex md:hidden'>
						<IconButton
							size='large'
							color='inherit'
							onClick={handleOpenNavMenu}
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							keepMounted
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							className='block md:hidden'
						>
							{user?.role === "CUSTOMER" ? (
								<MenuItem
									onClick={() => navigateTo("/customer")}
								>
									<Typography textAlign='center'>
										Home
									</Typography>
								</MenuItem>
							) : user?.role === "APE" ? (
								<MenuItem onClick={() => navigateTo("/APE")}>
									<Typography textAlign='center'>
										Home
									</Typography>
								</MenuItem>
							) : user?.role === "PLANTER" ? (
								<MenuItem onClick={() => navigateTo("/sukau")}>
									<Typography textAlign='center'>
										Home
									</Typography>
								</MenuItem>
							) : null}
						</Menu>
					</Box>

					{/* Logo on small screen */}
					<Button
						onClick={() => navigateTo("/")}
						className='grow flex md:hidden'
					>
						<img
							src='/images/APELogo.png'
							alt='ForestAPE Logo'
							className='mr-4 w-11 h-11 p-1 rounded-full bg-white'
						/>

						<Typography className='text-white normal-case font-bold text-xl flex grow font-["Cantora_One"]'>
							ForestAPE
						</Typography>
					</Button>

					{/* Pages on Large Screen */}

					<Box className='hidden md:flex grow ml-4 font-bold'>
						{user !== null && (
							<Button
								onClick={handleHome}
								className='text-white font-["Cantora_One"]'
							>
								Home
							</Button>
						)}
					</Box>

					{/* Avatar Controls */}
					<Box className='grow-0 flex items-center gap-3'>
						{user === null ? (
							<Button
								className='text-white font-["Cantora_One"]'
								onClick={() => navigateTo("/")}
							>
								Sign in
							</Button>
						) : null}

						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								className='p-0'
							>
								<Avatar
									alt='Remy Sharp'
									src='/static/images/avatar/2.jpg'
									className='bg-green-500'
								/>
							</IconButton>
						</Tooltip>

						<Menu
							sx={{ mt: "45px" }}
							id='menu-appbar'
							keepMounted
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{user === null ? (
								<MenuItem onClick={() => navigateTo("/")}>
									<Typography textAlign='center'>
										Sign In
									</Typography>
								</MenuItem>
							) : (
								<MenuItem onClick={logout}>
									<Typography textAlign='center'>
										Log Out
									</Typography>
								</MenuItem>
							)}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Appbar;
