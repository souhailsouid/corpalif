import React from 'react'
// @material-ui/core components

// core components
import Table from 'components/Table/Table.jsx'
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'

import withStyles from '@material-ui/core/styles/withStyles'
import InfoArea from 'components/InfoArea/InfoStructureArea.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import DeleteIcon from '@material-ui/icons/Delete'
import Subject from '@material-ui/icons/Subject'
import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
const Tables = ({ classes, association }) => (
	<div>
		<Table
			tableHead={[]}
			tableData={[
				[
					<div style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'justify' }}>
						<div style={{ color: 'rgb(51, 116, 103)' }}>
							<b>{association.name}</b>
						</div>,
						<div>{association.adresse}</div>,
						<div>{association.phone}</div>,
						<div>{association.email}</div>
					</div>
				]
			]}
			customCellClasses={[ classes.textCenter, classes.textRight, classes.textRight ]}
			customClassesForCells={[ 0, 4, 5 ]}
			customHeadCellClasses={[ classes.textCenter, classes.textRight, classes.textRight ]}
			customHeadClassesForCells={[ 0, 4, 5 ]}
		/>
	</div>
)
export default withStyles(style)(Tables)
