Vue.component('coupon', {
	template: '<input placeholder="Enter coupon code here" @blur="onCouponApplied">',

	methods: {
		onCouponApplied() {
			this.$emit('applied'); 
		}
	}
})

// parent scope
new Vue ({
	el: '#root',

	methods: {
		onCouponApplied() {
			alert('It was applied');
		}
	}
})