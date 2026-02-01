import React from 'react'
import { makeStyles } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },

}));

const FAQ = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="wpo-benefits-section">
            <h2>Frequently Ask Questions</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>Market research on our global panel with support from our experts.</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   Digiroc provides comprehensive market research services across African markets, combining primary and secondary research methodologies. Our expert team delivers actionable insights through stakeholder interviews, industry analysis, competitive intelligence, and consumer behavior studies tailored to your specific business objectives.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading}>How can data analytics help my business grow?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Our advanced analytics services transform raw business data into strategic insights. We help identify growth opportunities, optimize operations, forecast market trends, and make data-driven decisions that reduce risk and increase profitability across your organization.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography className={classes.heading}>What IT distribution services does Digiroc offer?</Typography>
                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Digiroc provides end-to-end IT distribution solutions including vendor partnerships, supply chain management, technical support, and value-added services. We connect leading global technology vendors with enterprise customers across Africa, ensuring reliable delivery and competitive pricing.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>How does Digiroc support PE/VC investment decisions?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We provide comprehensive investment due diligence, market validation, competitive analysis, and portfolio optimization services for private equity and venture capital firms. Our research delivers the strategic intelligence needed to evaluate opportunities, assess risks, and maximize returns on investments in African markets.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQ;