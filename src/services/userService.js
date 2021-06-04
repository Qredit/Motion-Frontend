
import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use( config => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken){
    const token = 'Bearer ' + accessToken;
    config.headers.Authorization = token;
    config.headers['x-access-token'] = accessToken;
  }

  return config;
});

var userService = {

  get: async () => {
  	let data = {};
    let res = await axios.post(`/api/user`, data);
    return res.data || [];
  },

  gettottoken: async () => {
  	let data = {};
    let res = await axios.post(`/api/usertottoken`, data);
    return res.data || [];
  },

  savepersonasettings: async (settings) => {
  	let data = {
  		settings: settings
  	};
    let res = await axios.post(`/api/usersavepersonasettings`, data);
    return res.data || [];
  },
  
  invalidatesessions: async () => {
  	let data = {};
    let res = await axios.post(`/api/userinvalidatesessions`, data);
    return res.data || [];
  },

  logout: async () => {
  	let data = {};
    let res = await axios.post(`/api/userlogout`, data);
    return res.data || [];
  },
  
  getimages: async () => {
  	let data = {};
    let res = await axios.post(`/api/userimages`, data);
    return res.data || [];
  },

  getloginhistory: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetloginhistory`, data);
    return res.data || [];
  },

  getcontacts: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetcontacts`, data);
    return res.data || [];
  },

  getcontact: async (contactid) => {
    let data = {
      contactid: contactid
    };
    let res = await axios.post(`/api/usergetcontact`, data);
    return res.data || [];
  },
  
  getpendingcontacts: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetpendingcontacts`, data);
    return res.data || [];
  },
  
  findcontact: async (email) => {
    let data = {
      email: email,
    };
    let res = await axios.post(`/api/userfindcontact`, data);
    return res.data || [];
  },
  
  newcontact: async (otheruserid) => {
    let data = {
      otheruserid: otheruserid,
    };
    let res = await axios.post(`/api/usernewcontact`, data);
    return res.data || [];
  },

  approvecontact: async (contactid) => {
    let data = {
      contactid: contactid,
    };
    let res = await axios.post(`/api/userapprovecontact`, data);
    return res.data || [];
  },
  
  declinecontact: async (contactid) => {
    let data = {
      contactid: contactid,
    };
    let res = await axios.post(`/api/userdeclinecontact`, data);
    return res.data || [];
  },
  
  bip39recorded: async () => {
  	let data = {};
    let res = await axios.post(`/api/userbip39recorded`, data);
    return res.data || [];
  },

  getpassphrase: async (rdata) => {
    let data = {
      password: rdata.password
    };
    let res = await axios.post(`/api/userpassphrase`, data);
    return res.data || [];
  },

  changepassword: async (rdata) => {
    let data = {
      password: rdata.password,
      newpass: rdata.newpass
    };
    let res = await axios.post(`/api/userchangepassword`, data);
    return res.data || [];
  },
  
  register: async (rdata) => {
    let data = {
      entity: rdata.entity,
      email: rdata.email,
      companyname: rdata.companyname,
      familyname: rdata.familyname,
      givenname: rdata.givenname,
      residence_country: rdata.residence_country,
      password: rdata.password,
      invitecode: rdata.invitecode
    };
    let res = await axios.post(`/api/auth/signup`, data);
    return res.data || [];
  },

  login: async (rdata) => {
    let data = {
      email: rdata.email,
      password: rdata.password
    };
    let res = await axios.post(`/api/auth/signin`, data);
    return res.data || [];
  },
  
  createrevolutorder: async (rdata) => {
    let data = {
      plan: rdata.plan,
      period: rdata.period,
      amount: rdata.amount
    };
    let res = await axios.post(`/api/usercreaterevolutorder`, data);
    return res.data || [];
  },

  revolutpaymentapproved: async (rdata) => {

	let data = {
		plan: rdata.plan,
		period: rdata.period,
		amount: rdata.amount,
		provider: rdata.provider,
		orderid: rdata.orderid
	};
    let res = await axios.post(`/api/userrevolutpaymentapproved`, data);
    return res.data || [];
  },
  
  createcoinpaymentsorder: async (rdata) => {
    let data = {
      plan: rdata.plan,
      period: rdata.period,
      amount: rdata.amount,
      ticker: rdata.ticker
    };
    let res = await axios.post(`/api/usercreatecoinpaymentsorder`, data);
    return res.data || [];
  },
  
  selectdowngradeplan: async (rdata) => {
    let data = {
      plan: rdata.plan,
      period: rdata.period,
      amount: rdata.amount
    };
    let res = await axios.post(`/api/userselectdowngradeplan`, data);
    return res.data || [];
  },

  updateprofilepic: async (image) => {
    let data = {
      image: image
    };
    let res = await axios.post(`/api/userupdateprofilepic`, data);
    return res.data || [];
  },
  
  updateprofilebg: async (image) => {
    let data = {
      image: image
    };
    let res = await axios.post(`/api/userupdateprofilebg`, data);
    return res.data || [];
  },

  setlanguage: async (language) => {
    let data = {
      language: language
    };
    let res = await axios.post(`/api/usersetlanguage`, data);
    return res.data || [];
  },
  
  getnotificationcount: async () => {
  	let data = {};
    let res = await axios.post(`/api/usergetnotificationcount`, data);
    return res.data || [];
  },
  
  getnotification: async (id) => {
  	let data = {
  		id: id
  	};
    let res = await axios.post(`/api/usergetnotification`, data);
    return res.data || [];
  },

  getnotificationhistory: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetnotificationhistory`, data);
    return res.data || [];
  },
  
  getwalletaddresses: async (id) => {
  	let data = {
  		id: id
  	};
    let res = await axios.post(`/api/usergetwalletaddresses`, data);
    return res.data || [];
  },

  getwalletbalance: async (id) => {
  	let data = {
  		id: id
  	};
    let res = await axios.post(`/api/usergetwalletbalance`, data);
    return res.data || [];
  },
  
  getwallettransactions: async (walletid, skip, limit) => {
    let data = {
      walletid: walletid,
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetwallettransactions`, data);
    return res.data || [];
  },
  
  gettransaction: async (walletid, id) => {
    let data = {
      walletid: walletid,
      id: id
    };
    let res = await axios.post(`/api/usergettransaction`, data);
    return res.data || [];
  },
  
  sendtransaction: async (walletid, contactid, address, amount, pass) => {
  	let data = {
  		walletid: walletid,
  		contactid: contactid,
  		address: address,
  		amount: amount,
  		pass: pass
  	};
    let res = await axios.post(`/api/usersendtransaction`, data);
    return res.data || [];
  },

  sendqreditvote: async (walletid, tovote, pass) => {
  	let data = {
  		walletid: walletid,
  		tovote: tovote,
  		pass: pass
  	};
    let res = await axios.post(`/api/usersendqreditvote`, data);
    return res.data || [];
  },
  
  getdelegatelist: async (walletid) => {
  	let data = {
  		walletid: walletid
  	};
    let res = await axios.post(`/api/usergetdelegatelist`, data);
    return res.data || [];
  },
  
  getwalletvotes: async (walletid) => {
  	let data = {
  		walletid: walletid
  	};
    let res = await axios.post(`/api/usergetwalletvotes`, data);
    return res.data || [];
  },

  doqreditswap: async (passphrase) => {
  	let data = {
  		passphrase: passphrase
  	};
    let res = await axios.post(`/api/userdoqreditswap`, data);
    return res.data || [];
  },
  
  getswaptransactions: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetswaptransactions`, data);
    return res.data || [];
  },

  getalltransactions: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetalltransactions`, data);
    return res.data || [];
  },
  
  createinvitation: async (emailphone) => {
    let data = {
      emailphone: emailphone
    };
    let res = await axios.post(`/api/usercreateinvitation`, data);
    return res.data || [];
  },
  
  getinvitations: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetinvitations`, data);
    return res.data || [];
  },

  getreferrals: async (skip, limit) => {
    let data = {
      skip: skip,
      limit: limit
    };
    let res = await axios.post(`/api/usergetreferrals`, data);
    return res.data || [];
  },

  getuserphones: async () => {
    let data = { };
    let res = await axios.post(`/api/usergetphones`, data);
    return res.data || [];
  },
  
  getpincode: async (phone) => {
    let data = {
    	phone: phone
    };
    let res = await axios.post(`/api/usergetpincode`, data);
    return res.data || [];
  },

  submitpincode: async (phone, pin) => {
    let data = {
    	phone: phone,
    	pin: pin
    };
    let res = await axios.post(`/api/usersubmitpincode`, data);
    return res.data || [];
  },

  setprimaryphone: async (id) => {
    let data = {
    	id: id
    };
    let res = await axios.post(`/api/usersetprimaryphone`, data);
    return res.data || [];
  },

  getuseraddresses: async () => {
    let data = { };
    let res = await axios.post(`/api/usergetaddresses`, data);
    return res.data || [];
  },

  addnewaddress: async (fields) => {
    let data = {
    	line1: fields.line1,
    	line2: fields.line2,
    	city: fields.city,
    	province: fields.province,
    	postalcode: fields.postalcode,
    	country: fields.country
    };
    let res = await axios.post(`/api/useraddnewaddress`, data);
    return res.data || [];
  },

  setprimaryaddress: async (id) => {
    let data = {
    	id: id
    };
    let res = await axios.post(`/api/usersetprimaryaddress`, data);
    return res.data || [];
  },
  
  setnotification: async (item, value) => {
    let data = {
      item: item,
      value: value
    };
    let res = await axios.post(`/api/usersetnotification`, data);
    return res.data || [];
  },
  
  upgradeplan: async (plan) => {
    let data = {
      plan: plan,
    };
    let res = await axios.post(`/api/userupgradeplan`, data);
    return res.data || [];
  },

  getplans: async () => {
    let data = {};
    let res = await axios.post(`/api/usergetplans`, data);
    return res.data || [];
  },
  
  getavailcryptocurr: async () => {
    let data = {};
    let res = await axios.post(`/api/usergetavailablecryptocurrencies`, data);
    return res.data || [];
  },
  
  createcryptowallet: async (ticker, password) => {
    let data = {
    	ticker: ticker,
    	password: password
    };
    let res = await axios.post(`/api/usercreatecryptowallet`, data);
    return res.data || [];
  },
  
  
}

export default userService;