"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[897,211],{30969:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(97582),n=a(67627),c=a(69638),l=a(26614),s=a(24584),m=a(83180),i=a(30022),u=a(78455);const o=(0,c.Z)(i.Z)((function(e){var t=e.cartUrl,a=(0,r.__rest)(e,["cartUrl"]),c=(0,l.Z)()?null:n.createElement(m.Z,{url:t});return(0,u.Z)(s.default)((0,r.__assign)((0,r.__assign)({},a),{cartUrl:t,headerLink:c}))}))},24584:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(97582),n=a(67627),c=a(35863),l=a(58897),s=a(92574);const m=function(e){var t=e.children;return n.createElement("header",{className:"cart-header"},n.createElement("h3",{className:"cart-title optimizedCheckout-headingSecondary"},n.createElement(s.Z,{id:"cart.cart_heading"})),t)};var i=a(65228),u=a(71282),o=a(48527),d=a(54701),E=a(50041),f=a(47112);const h=function(e){var t=e.isTaxIncluded,a=e.taxes,h=e.storeCurrency,p=e.shopperCurrency,y=e.headerLink,I=e.additionalLineItems,Z=e.lineItems,x=e.total,C=(0,r.__rest)(e,["isTaxIncluded","taxes","storeCurrency","shopperCurrency","headerLink","additionalLineItems","lineItems","total"]),_=(0,c.M)(),k=_.extensionService,v=_.isExtensionEnabled,L=Boolean(v()&&k.isRegionEnabled("summary.lastItem.after")),b=(0,n.useMemo)((function(){return(0,f.Z)(Z)}),[Z]),g=t&&a&&a.length>0;return(0,n.useEffect)((function(){if(L)return k.renderExtension(l.T.SummaryLastItemAfter,"summary.lastItem.after"),function(){k.removeListeners("summary.lastItem.after")}}),[k,L]),n.createElement("article",{className:"cart optimizedCheckout-orderSummary","data-test":"cart"},n.createElement(m,null,y),n.createElement(o.Z,null,n.createElement(i.Z,{displayLineItemsCount:!0,items:b})),L&&n.createElement("div",{id:l.T.SummaryLastItemAfter}),n.createElement(o.Z,null,n.createElement(d.Z,(0,r.__assign)({isTaxIncluded:t,taxes:a},C)),I),n.createElement(o.Z,null,n.createElement(E.Z,{orderAmount:x,shopperCurrencyCode:p.code,storeCurrencyCode:h.code})),g&&n.createElement(o.Z,null,n.createElement("h5",{className:"cart-taxItem cart-taxItem--subtotal optimizedCheckout-contentPrimary","data-test":"tax-text"},n.createElement(s.Z,{id:"tax.inclusive_label"})),(a||[]).map((function(e,t){return n.createElement(u.Z,{amount:e.amount,key:t,label:e.name,testId:"cart-taxes"})}))))}}}]);
//# sourceMappingURL=cart-summary-dc93fef9.js.map