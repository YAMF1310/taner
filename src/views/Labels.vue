<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
          :to="`/labels/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagStore from "../store/tagStore";
import { mixins } from "vue-class-component";
import { TagHelper } from "../mixins/TagHelper";
tagStore.fetchTags();
@Component
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 0;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
