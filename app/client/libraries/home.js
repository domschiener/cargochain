function dateToTimestamp(date) {
  var split_date = date.split('-');
  var year = parseInt(split_date[0]);
  var month = parseInt(split_date[1]);
  var day = parseInt(split_date[2]);

  var timestamp =  (year - 1970) * 31557600 + (month - 1) * 2629800 + (day - 1) * 86400 - (12 * 60 * 60);
  return timestamp;
}

Template.home.rendered = function() {
  $('input:checkbox').bootstrapSwitch({
    onText: 'Yes',
    offText: 'No'
  });

  console.log(web3.version.api, "api");

  var data = [
    {text: 'Afghanistan', id: 'AF'},
    {text: 'Åland Islands', id: 'AX'},
    {text: 'Albania', id: 'AL'},
    {text: 'Algeria', id: 'DZ'},
    {text: 'American Samoa', id: 'AS'},
    {text: 'AndorrA', id: 'AD'},
    {text: 'Angola', id: 'AO'},
    {text: 'Anguilla', id: 'AI'},
    {text: 'Antarctica', id: 'AQ'},
    {text: 'Antigua and Barbuda', id: 'AG'},
    {text: 'Argentina', id: 'AR'},
    {text: 'Armenia', id: 'AM'},
    {text: 'Aruba', id: 'AW'},
    {text: 'Australia', id: 'AU'},
    {text: 'Austria', id: 'AT'},
    {text: 'Azerbaijan', id: 'AZ'},
    {text: 'Bahamas', id: 'BS'},
    {text: 'Bahrain', id: 'BH'},
    {text: 'Bangladesh', id: 'BD'},
    {text: 'Barbados', id: 'BB'},
    {text: 'Belarus', id: 'BY'},
    {text: 'Belgium', id: 'BE'},
    {text: 'Belize', id: 'BZ'},
    {text: 'Benin', id: 'BJ'},
    {text: 'Bermuda', id: 'BM'},
    {text: 'Bhutan', id: 'BT'},
    {text: 'Bolivia', id: 'BO'},
    {text: 'Bosnia and Herzegovina', id: 'BA'},
    {text: 'Botswana', id: 'BW'},
    {text: 'Bouvet Island', id: 'BV'},
    {text: 'Brazil', id: 'BR'},
    {text: 'British Indian Ocean Territory', id: 'IO'},
    {text: 'Brunei Darussalam', id: 'BN'},
    {text: 'Bulgaria', id: 'BG'},
    {text: 'Burkina Faso', id: 'BF'},
    {text: 'Burundi', id: 'BI'},
    {text: 'Cambodia', id: 'KH'},
    {text: 'Cameroon', id: 'CM'},
    {text: 'Canada', id: 'CA'},
    {text: 'Cape Verde', id: 'CV'},
    {text: 'Cayman Islands', id: 'KY'},
    {text: 'Central African Republic', id: 'CF'},
    {text: 'Chad', id: 'TD'},
    {text: 'Chile', id: 'CL'},
    {text: 'China', id: 'CN'},
    {text: 'Christmas Island', id: 'CX'},
    {text: 'Cocos (Keeling) Islands', id: 'CC'},
    {text: 'Colombia', id: 'CO'},
    {text: 'Comoros', id: 'KM'},
    {text: 'Congo', id: 'CG'},
    {text: 'Congo, The Democratic Republic of the', id: 'CD'},
    {text: 'Cook Islands', id: 'CK'},
    {text: 'Costa Rica', id: 'CR'},
    {text: 'Cote D\'Ivoire', id: 'CI'},
    {text: 'Croatia', id: 'HR'},
    {text: 'Cuba', id: 'CU'},
    {text: 'Cyprus', id: 'CY'},
    {text: 'Czech Republic', id: 'CZ'},
    {text: 'Denmark', id: 'DK'},
    {text: 'Djibouti', id: 'DJ'},
    {text: 'Dominica', id: 'DM'},
    {text: 'Dominican Republic', id: 'DO'},
    {text: 'Ecuador', id: 'EC'},
    {text: 'Egypt', id: 'EG'},
    {text: 'El Salvador', id: 'SV'},
    {text: 'Equatorial Guinea', id: 'GQ'},
    {text: 'Eritrea', id: 'ER'},
    {text: 'Estonia', id: 'EE'},
    {text: 'Ethiopia', id: 'ET'},
    {text: 'Falkland Islands (Malvinas)', id: 'FK'},
    {text: 'Faroe Islands', id: 'FO'},
    {text: 'Fiji', id: 'FJ'},
    {text: 'Finland', id: 'FI'},
    {text: 'France', id: 'FR'},
    {text: 'French Guiana', id: 'GF'},
    {text: 'French Polynesia', id: 'PF'},
    {text: 'French Southern Territories', id: 'TF'},
    {text: 'Gabon', id: 'GA'},
    {text: 'Gambia', id: 'GM'},
    {text: 'Georgia', id: 'GE'},
    {text: 'Germany', id: 'DE'},
    {text: 'Ghana', id: 'GH'},
    {text: 'Gibraltar', id: 'GI'},
    {text: 'Greece', id: 'GR'},
    {text: 'Greenland', id: 'GL'},
    {text: 'Grenada', id: 'GD'},
    {text: 'Guadeloupe', id: 'GP'},
    {text: 'Guam', id: 'GU'},
    {text: 'Guatemala', id: 'GT'},
    {text: 'Guernsey', id: 'GG'},
    {text: 'Guinea', id: 'GN'},
    {text: 'Guinea-Bissau', id: 'GW'},
    {text: 'Guyana', id: 'GY'},
    {text: 'Haiti', id: 'HT'},
    {text: 'Heard Island and Mcdonald Islands', id: 'HM'},
    {text: 'Holy See (Vatican City State)', id: 'VA'},
    {text: 'Honduras', id: 'HN'},
    {text: 'Hong Kong', id: 'HK'},
    {text: 'Hungary', id: 'HU'},
    {text: 'Iceland', id: 'IS'},
    {text: 'India', id: 'IN'},
    {text: 'Indonesia', id: 'ID'},
    {text: 'Iran, Islamic Republic Of', id: 'IR'},
    {text: 'Iraq', id: 'IQ'},
    {text: 'Ireland', id: 'IE'},
    {text: 'Isle of Man', id: 'IM'},
    {text: 'Israel', id: 'IL'},
    {text: 'Italy', id: 'IT'},
    {text: 'Jamaica', id: 'JM'},
    {text: 'Japan', id: 'JP'},
    {text: 'Jersey', id: 'JE'},
    {text: 'Jordan', id: 'JO'},
    {text: 'Kazakhstan', id: 'KZ'},
    {text: 'Kenya', id: 'KE'},
    {text: 'Kiribati', id: 'KI'},
    {text: 'Korea, Democratic People\'S Republic of', id: 'KP'},
    {text: 'Korea, Republic of', id: 'KR'},
    {text: 'Kuwait', id: 'KW'},
    {text: 'Kyrgyzstan', id: 'KG'},
    {text: 'Lao People\'S Democratic Republic', id: 'LA'},
    {text: 'Latvia', id: 'LV'},
    {text: 'Lebanon', id: 'LB'},
    {text: 'Lesotho', id: 'LS'},
    {text: 'Liberia', id: 'LR'},
    {text: 'Libyan Arab Jamahiriya', id: 'LY'},
    {text: 'Liechtenstein', id: 'LI'},
    {text: 'Lithuania', id: 'LT'},
    {text: 'Luxembourg', id: 'LU'},
    {text: 'Macao', id: 'MO'},
    {text: 'Macedonia, The Former Yugoslav Republic of', id: 'MK'},
    {text: 'Madagascar', id: 'MG'},
    {text: 'Malawi', id: 'MW'},
    {text: 'Malaysia', id: 'MY'},
    {text: 'Maldives', id: 'MV'},
    {text: 'Mali', id: 'ML'},
    {text: 'Malta', id: 'MT'},
    {text: 'Marshall Islands', id: 'MH'},
    {text: 'Martinique', id: 'MQ'},
    {text: 'Mauritania', id: 'MR'},
    {text: 'Mauritius', id: 'MU'},
    {text: 'Mayotte', id: 'YT'},
    {text: 'Mexico', id: 'MX'},
    {text: 'Micronesia, Federated States of', id: 'FM'},
    {text: 'Moldova, Republic of', id: 'MD'},
    {text: 'Monaco', id: 'MC'},
    {text: 'Mongolia', id: 'MN'},
    {text: 'Montserrat', id: 'MS'},
    {text: 'Morocco', id: 'MA'},
    {text: 'Mozambique', id: 'MZ'},
    {text: 'Myanmar', id: 'MM'},
    {text: 'Namibia', id: 'NA'},
    {text: 'Nauru', id: 'NR'},
    {text: 'Nepal', id: 'NP'},
    {text: 'Netherlands', id: 'NL'},
    {text: 'Netherlands Antilles', id: 'AN'},
    {text: 'New Caledonia', id: 'NC'},
    {text: 'New Zealand', id: 'NZ'},
    {text: 'Nicaragua', id: 'NI'},
    {text: 'Niger', id: 'NE'},
    {text: 'Nigeria', id: 'NG'},
    {text: 'Niue', id: 'NU'},
    {text: 'Norfolk Island', id: 'NF'},
    {text: 'Northern Mariana Islands', id: 'MP'},
    {text: 'Norway', id: 'NO'},
    {text: 'Oman', id: 'OM'},
    {text: 'Pakistan', id: 'PK'},
    {text: 'Palau', id: 'PW'},
    {text: 'Palestinian Territory, Occupied', id: 'PS'},
    {text: 'Panama', id: 'PA'},
    {text: 'Papua New Guinea', id: 'PG'},
    {text: 'Paraguay', id: 'PY'},
    {text: 'Peru', id: 'PE'},
    {text: 'Philippines', id: 'PH'},
    {text: 'Pitcairn', id: 'PN'},
    {text: 'Poland', id: 'PL'},
    {text: 'Portugal', id: 'PT'},
    {text: 'Puerto Rico', id: 'PR'},
    {text: 'Qatar', id: 'QA'},
    {text: 'Reunion', id: 'RE'},
    {text: 'Romania', id: 'RO'},
    {text: 'Russian Federation', id: 'RU'},
    {text: 'RWANDA', id: 'RW'},
    {text: 'Saint Helena', id: 'SH'},
    {text: 'Saint Kitts and Nevis', id: 'KN'},
    {text: 'Saint Lucia', id: 'LC'},
    {text: 'Saint Pierre and Miquelon', id: 'PM'},
    {text: 'Saint Vincent and the Grenadines', id: 'VC'},
    {text: 'Samoa', id: 'WS'},
    {text: 'San Marino', id: 'SM'},
    {text: 'Sao Tome and Principe', id: 'ST'},
    {text: 'Saudi Arabia', id: 'SA'},
    {text: 'Senegal', id: 'SN'},
    {text: 'Serbia and Montenegro', id: 'CS'},
    {text: 'Seychelles', id: 'SC'},
    {text: 'Sierra Leone', id: 'SL'},
    {text: 'Singapore', id: 'SG'},
    {text: 'Slovakia', id: 'SK'},
    {text: 'Slovenia', id: 'SI'},
    {text: 'Solomon Islands', id: 'SB'},
    {text: 'Somalia', id: 'SO'},
    {text: 'South Africa', id: 'ZA'},
    {text: 'South Georgia and the South Sandwich Islands', id: 'GS'},
    {text: 'Spain', id: 'ES'},
    {text: 'Sri Lanka', id: 'LK'},
    {text: 'Sudan', id: 'SD'},
    {text: 'Suritext', id: 'SR'},
    {text: 'Svalbard and Jan Mayen', id: 'SJ'},
    {text: 'Swaziland', id: 'SZ'},
    {text: 'Sweden', id: 'SE'},
    {text: 'Switzerland', id: 'CH'},
    {text: 'Syrian Arab Republic', id: 'SY'},
    {text: 'Taiwan, Province of China', id: 'TW'},
    {text: 'Tajikistan', id: 'TJ'},
    {text: 'Tanzania, United Republic of', id: 'TZ'},
    {text: 'Thailand', id: 'TH'},
    {text: 'Timor-Leste', id: 'TL'},
    {text: 'Togo', id: 'TG'},
    {text: 'Tokelau', id: 'TK'},
    {text: 'Tonga', id: 'TO'},
    {text: 'Trinidad and Tobago', id: 'TT'},
    {text: 'Tunisia', id: 'TN'},
    {text: 'Turkey', id: 'TR'},
    {text: 'Turkmenistan', id: 'TM'},
    {text: 'Turks and Caicos Islands', id: 'TC'},
    {text: 'Tuvalu', id: 'TV'},
    {text: 'Uganda', id: 'UG'},
    {text: 'Ukraine', id: 'UA'},
    {text: 'United Arab Emirates', id: 'AE'},
    {text: 'United Kingdom', id: 'GB'},
    {text: 'United States', id: 'US'},
    {text: 'United States Minor Outlying Islands', id: 'UM'},
    {text: 'Uruguay', id: 'UY'},
    {text: 'Uzbekistan', id: 'UZ'},
    {text: 'Vanuatu', id: 'VU'},
    {text: 'Venezuela', id: 'VE'},
    {text: 'Viet Nam', id: 'VN'},
    {text: 'Virgin Islands, British', id: 'VG'},
    {text: 'Virgin Islands, U.S.', id: 'VI'},
    {text: 'Wallis and Futuna', id: 'WF'},
    {text: 'Western Sahara', id: 'EH'},
    {text: 'Yemen', id: 'YE'},
    {text: 'Zambia', id: 'ZM'},
    {text: 'Zimbabwe', id: 'ZW'}
  ]
  $(".select2_dropdown").select2({
    data: data,
    width: 200
  });
}


Template.home.events({
  'click #cargo_submit': function () {
    var owner = {};
    owner['importer'] = $('#importer_person').val();
    owner['importer_company'] = $('#importer_company').val();
    owner['importer_address'] = $('#importer_address').val();
    owner['exporter'] = $('#exporter_person').val();
    owner['exporter_company'] = $('#exporter_company').val();
    owner['exporter_address'] = $('#exporter_address').val();

    var cargo = {};
    cargo['name_goods'] = $('#name_goods').val();
    cargo['description'] = $('#description').val();

    var truckload = $('#less-than-truckload:checked').val();
    if (truckload) {
      cargo['truckload'] = true;
    }
    else {
      cargo['truckload'] = false;
    }
    cargo['quantity'] = parseInt($('#quantity').val());
    cargo['weight'] = parseInt($('#weight').val());

    cargo['origin'] = $('#origin :selected').text();
    cargo['destination'] = $('#destination :selected').text();

    cargo['arrival_date'] = dateToTimestamp($('#arrival_date').val());

    cargo['payment'] = parseInt($('#payment').val());
    cargo['penalty'] = parseInt($('#penalty').val());
    cargo['credit'] = Session.get('credit');
    cargo['export'] = Session.get('export');
    cargo['invoice'] = Session.get('invoice');
    cargo['status'] = false;

    var shipmentContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"seller","outputs":[{"name":"name","type":"bytes32"},{"name":"company","type":"bytes32"},{"name":"addr","type":"bytes32"},{"name":"account","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"arrival","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_company","type":"bytes32"},{"name":"_addr","type":"bytes32"}],"name":"agreement","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"buyer","outputs":[{"name":"name","type":"bytes32"},{"name":"company","type":"bytes32"},{"name":"addr","type":"bytes32"},{"name":"account","type":"address"},{"name":"paid","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"releasePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"cargo","outputs":[{"name":"name","type":"bytes32"},{"name":"description","type":"string"},{"name":"truckload","type":"bool"},{"name":"quantity","type":"uint256"},{"name":"weight","type":"uint256"},{"name":"origin","type":"bytes32"},{"name":"destination","type":"bytes32"},{"name":"startdate","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"payment","type":"uint256"},{"name":"penalty","type":"uint256"},{"name":"hash","type":"string"},{"name":"active","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"escrow","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_company","type":"bytes32"},{"name":"_addr","type":"bytes32"},{"name":"cargoname","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_truckload","type":"bool"},{"name":"_quantity","type":"uint256"},{"name":"_weight","type":"uint256"},{"name":"_origin","type":"bytes32"},{"name":"_destination","type":"bytes32"},{"name":"_deadline","type":"uint256"},{"name":"_penalty","type":"uint256"},{"name":"_hash","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"owner","type":"bytes32"},{"indexed":false,"name":"purchaser","type":"bytes32"}],"name":"newAgreement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"paymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"delayedShipment","type":"event"}]);
    var shipment = shipmentContract.new(
      owner['importer'],
      owner['importer_company'],
      owner['importer_address'],
      cargo['name_goods'],
      cargo['description'],
      cargo['truckload'],
      cargo['quantity'],
      cargo['weight'],
      cargo['origin'],
      cargo['destination'],
      cargo['deadline'],
      cargo['penalty'],
      cargo['export'],
       {
         from: web3.eth.accounts[3],
         data: '6060604052604051610b17380380610b17833981016040528080519060200190919080519060200190919080519060200190919080519060200190919080518201919060200180519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080518201919060200150505b8c6000600050600001600050819055508b6000600050600101600050819055508a60006000506002016000508190555033600060005060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550896004600050600001600050819055508860046000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015657805160ff1916838001178555610187565b82800160010185558215610187579182015b82811115610186578251826000505591602001919060010190610168565b5b5090506101b29190610194565b808211156101ae5760008181506000905550600101610194565b5090565b505087600460005060020160006101000a81548160ff021916908302179055508660046000506003016000508190555085600460005060040160005081905550846004600050600501600050819055508360046000506006016000508190555082600460005060080160005081905550816004600050600a0160005081905550806004600050600b016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061028757805160ff19168380011785556102b8565b828001600101855582156102b8579182015b828111156102b7578251826000505591602001919060010190610299565b5b5090506102e391906102c5565b808211156102df57600081815060009055506001016102c5565b5090565b505060006004600050600c0160006101000a81548160ff021916908302179055505b505050505050505050505050506107f7806103206000396000f36060604052361561007f576000357c01000000000000000000000000000000000000000000000000000000009004806308551a531461008157806311e99c22146100cf578063287a4f36146100de5780637150d8ae14610108578063d116c8c41461015d578063e12855881461016c578063e2fdcc17146102e75761007f565b005b61008e60048050506102f6565b604051808581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405180910390f35b6100dc6004805050610714565b005b610106600480803590602001909190803590602001909190803590602001909190505061042d565b005b61011560048050506103d0565b604051808681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019550505050505060405180910390f35b61016a60048050506105ee565b005b6101796004805050610340565b604051808e8152602001806020018d81526020018c81526020018b81526020018a81526020018981526020018881526020018781526020018681526020018581526020018060200184815260200183810383528f8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102485780601f1061021d57610100808354040283529160200191610248565b820191906000526020600020905b81548152906001019060200180831161022b57829003601f168201915b50508381038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b50509f5050505050505050505050505050505060405180910390f35b6102f460048050506105a9565b005b60006000508060000160005054908060010160005054908060020160005054908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905084565b600460005080600001600050549080600101600050908060020160009054906101000a900460ff169080600301600050549080600401600050549080600501600050549080600601600050549080600701600050549080600801600050549080600901600050549080600a01600050549080600b016000509080600c0160009054906101000a900460ff1690508d565b60116000508060000160005054908060010160005054908060020160005054908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16905085565b82601160005060000160005081905550816011600050600101600050819055508060116000506002016000508190555033601160005060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550346004600050600901600050819055506000601160005060030160146101000a81548160ff021916908302179055504260046000506007016000508190555060016004600050600c0160006101000a81548160ff021916908302179055507f82a287cc340a4ddb1ff18684ea9d7da14c18bc3c30d22a24103bde9fbc90024f6000600050600001600050546011600050600001600050546040518080602001848152602001838152602001828103825260228152602001807f4e65772041677265656d656e74206265747765656e2074776f2050617274696581526020017f7321000000000000000000000000000000000000000000000000000000000000815260200150604001935050505060405180910390a15b505050565b601160005060030160149054906101000a900460ff16156105c957610002565b426203f480600460005060070160005054011015156105eb576105ea6105ee565b5b5b565b601160005060030160149054906101000a900460ff161561060e57610002565b600060005060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000600460005060090160005054604051809050600060405180830381858888f19350505050506001601160005060030160146101000a81548160ff021916908302179055507faf2f17dc93b2d9d775171b489ab37c1c082fc7d4da39f7a21abfe05d609994f06004600050600901600050546040518080602001838152602001828103825260118152602001807f5061796d656e742072656c6561736564210000000000000000000000000000008152602001506020019250505060405180910390a15b565b6000600060006000600460005060080160005054420393506201518092506000915082841015156107f057828404915081506004600050600a0160005054820290507f466c6f5989ed64798720e39fd0813b34bb24294653b40bc42ac8bfb8db64c5cf8160405180806020018381526020018281038252603d8152602001807f54686520736869706d656e74206861732061727269766564206c6174652e204481526020017f656c61792070656e616c74792077696c6c20626520636861726765642e0000008152602001506040019250505060405180910390a15b5b5050505056',
         gas: 3000000
       }, function(e, contract){
        console.log(contract);
        if (typeof contract.address != 'undefined') {
          cargo['address'] = contract.address;
          Session.set('contract', contract);
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);

          Meteor.call('new_cargo', owner, cargo, function(error, success) {
            if (success) {
              $('#home_submit').replaceWith('<button name ="' + success + '"id="go_cargo" class="btn btn-success btn-lg">Go To</button>');
            }
          })
        }
     })
  },
  'click #credit': function() {
    Session.set('credit', 'QmQ7M4hr4cnqSfejCMcgQTgsR2YztniithB2wQ8EgWjbKc');
    Session.set('export', 'QmQ7M4hr4cnqSfejCMcgQTgsR2YztniithB2wQ8EgWjbKc');
    Session.set('invoice', 'QmQ7M4hr4cnqSfejCMcgQTgsR2YztniithB2wQ8EgWjbKc');
    console.log("Documents uploaded!");
  },
  'click #go_cargo': function() {
    var route = '/buyer/' + $('#go_cargo').attr('name');
    Router.go(route);
  },
  'click .document_item': function(event) {
    console.log(event);
    var id = '#' + event.target.id;
    $(id).addClass('selected');
  }
});
