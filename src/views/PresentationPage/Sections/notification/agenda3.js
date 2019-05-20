import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import { Link } from 'react-router-dom'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'

const Agenda3 = ({ agenda3, classes }) => (
	<SnackbarContent
		message={
			<span
				style={{
					fontFamily: 'Roboto,Arial,sans-serif',
					fontSize: '22px',
					fontWeight: '400',
					color: '#a80505'
				}}
			>
				<div
					style={{
						color: '#3c4043',
						fontFamily: 'Roboto,Arial,sans-serif ',
						fontSize: '14px',
						fontWeight: 400,
						letterSpacing: '.2px',
						display: 'flex'
					}}
				>
					<Tooltip
						id="tooltip-top"
						title={<h5>Thème de l'évènement</h5>}
						placement="top"
						classes={{ tooltip: classes.tooltip }}
					>
						<div
							style={{
								backgroundColor: 'rgb(51, 116, 103',
								webkitBorderRadius: '4px',
								borderRadius: ' 4px',
								height: '14px',
								width: '14px',
								marginLeft: ' 3px',
								marginTop: ' 3px'
							}}
						/>
					</Tooltip>
					{'  '}
					<span
						style={{
							marginLeft: '7px',
							fontFamily: 'Roboto,Arial,sans-serif',
							fontSize: ' 17px',
							fontWeight: 400,
							letterSpacing: ' .2px',
							lineHeight: ' 20px',
							color: '#3c4043'
						}}
					>
						{agenda3.theme}
					</span>
				</div>{' '}
				<hr />
				<div
					style={{
						color: '#3c4043',
						fontFamily: 'Roboto,Arial,sans-serif ',
						fontSize: '14px',
						fontWeight: 400,
						letterSpacing: '.2px',
						display: 'flex'
					}}
				>
					<span style={{ marginLeft: '25px', fontSize: 16 }}> {agenda3.lieu}</span>
				</div>{' '}
				<br />
				<div
					style={{
						color: '#3c4043',
						fontFamily: 'Roboto,Arial,sans-serif ',
						fontSize: '14px',
						fontWeight: 400,
						letterSpacing: '.2px',
						display: 'flex'
					}}
				>
					<Link
						to={`/menu/veillemedicale/evenements/`}
						style={{
							color: 'rgb(60, 64, 67)'
						}}
					>
						<div className="icon">
							<svg width="20" height="20" viewBox="0 0 24 24" focusable="false" class="">
								<path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
							</svg>{' '}
							<span style={{ marginLeft: '6px', fontSize: 13 }} className="agenda">
								Plus d'infos ...
							</span>
						</div>
					</Link>
				</div>
			</span>
		}
		color="#999999"
	/>
)

export default withStyles(notificationsStyles)(Agenda3)
