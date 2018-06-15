window.Event = new Vue ();

Vue.component('coupon', {
	template: '<input placeholder="Enter coupon code here" @blur="onCouponApplied">',

	methods: {
		onCouponApplied() {
			Event.$emit('applied'); 
		}
	}
});

// parent scope
new Vue ({
	el: '#root',

	data: {
		couponApplied: false
	},

	created() {
		Event.$on('applied', () => alert('handling it'));
	}
});