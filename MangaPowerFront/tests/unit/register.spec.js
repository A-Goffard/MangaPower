/* import { mount } from '@vue/test-utils';
import 'cross-fetch/polyfill'
import RegisterView from '@/views/RegisterView.vue';

describe('RegisterView.vue', () => {
  it('validates inputYear is greater than limitYear', () => {
    const wrapper = mount(RegisterView);
    const inputDate = wrapper.find('input[type="date"]');

    inputDate.setValue('1919-01-01');
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.$data.inputDate).toBe('');
    expect(window.alert).toHaveBeenCalledWith("Don't overdo it with age...");
  });

  it('validates inputYear is less than currentYear', () => {
    const wrapper = mount(RegisterView);
    const inputDate = wrapper.find('input[type="date"]');

    inputDate.setValue(new Date().getFullYear() + 1 + '-01-01');
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.$data.inputDate).toBe('');
    expect(window.alert).toHaveBeenCalledWith("When do you live?");
  });

  it('validates inputDate length is at least 4 digits', () => {
    const wrapper = mount(RegisterView);
    const inputDate = wrapper.find('input[type="date"]');

    inputDate.setValue('12-01');
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.$data.inputDate).toBe('');
    expect(window.alert).toHaveBeenCalledWith('Is that the real birthdate?');
  });
}); */