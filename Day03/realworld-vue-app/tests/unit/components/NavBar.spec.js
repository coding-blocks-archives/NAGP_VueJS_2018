import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import store from "@/store";

describe("NavBar.vue", () => {
  it("shows Sign up/Sign in when no user", () => {
    const wrapper = shallowMount(NavBar, {
      store
    });
    const navItems = wrapper.findAll(".nav-item");
    expect(navItems.length).toBe(3);
  });

  it("shows username when logged in", () => {
    const wrapper = shallowMount(NavBar, {
      store
    });
    store.commit("users/setUser", { username: "someone" });
    const navItems = wrapper.findAll(".nav-item");
    const usernameItem = navItems.at(navItems.length - 1);
    expect(navItems.length).toBe(4);
    expect(usernameItem.text()).toEqual("someone");
  });
});
