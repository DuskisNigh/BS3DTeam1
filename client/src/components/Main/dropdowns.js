import React, { Component } from 'react';

class Dropdowns extends Component {
   render() {
		return (
			<div className="main-div">
				<div className="dd-industry-div">
					<select className="dd-industry" name="dd-industry" id="dd-industry" placeholder="Industry">
						<option value="RetailTrade">Retail Trade</option>
						<option value="PSTServices">Professional, Scientific, and Technical Services</option>
						<option value="WholesaleTrade">Wholesale Trade</option>
						<option value="Construction">Construction</option>
						<option value="Manufacturing">Manufacturing</option>
						<option value="RealEstate">Real Estate, Rental, and Leasing</option>
						<option value="Entertainment">Arts, Entertainment, and Recreation</option>
						<option value="Accommodation">Accommodation and Food Services</option>
						<option value="Finance">Finance and Insurance</option>
						<option value="InfoCultural">Information and Cultural Industries</option>
						<option value="AdminSupport">Administrative/Support and Waste Management/Remediation Services</option>
						<option value="Transportation">Transportation and Warehousing</option>
						<option value="MiningExtraction">Mining, Quarrying and Oil/Gas Extraction</option>
						<option value="Management">Management of Companies and Enterprises</option>
						<option value="Agriculture">Agriculture, Forestry, Fishing, and Hunting</option>
						<option value="Other">Other Services (Except Public Administration)</option>
					</select>
				</div>
				<div className="dd-infoTech-div">
					<select className="dd-infoTech" name="dd-infoTech" id="dd-infoTech" placeholder="Information Technology">
						<option value="DataAnalytics">Data Analytics</option>
						<option value="Accounting">Accounting/Bookkeeping Software</option>
						<option value="MgmtSoftware">Management Software</option>
						<option value="CloudComp">Cloud Computing</option>
						<option value="IoTMobile">Internet Enabled Mobile Devices (e.g. Smartphone, Tablet)</option>
						<option value="CRMSoftware">Customer/Supplier Relationship Management Software (CRM)</option>
						<option value="ERPSoftware">Enterprise Resource Planning Software (ERP)</option>
						<option value="DeskProdSoftware">Desktop Office/Productivity Software</option>
						<option value="Design">Design Software</option>
						<option value="WebApps">Web-Based Applications</option>
						<option value="CustomSoftware">Custom Software/Company Software</option>
						<option value="PoSSoftware">Point of Sale Software/ Credit Card Payment Software</option>
						<option value="ClientServer">Client Server/MS Exchange/FTP/VOIP</option>
					</select>
				</div>
				<div>
					<button className="enter-bttn">ENTER</button>
				</div>
			</div>
    		);
	}
}

export default Dropdowns
