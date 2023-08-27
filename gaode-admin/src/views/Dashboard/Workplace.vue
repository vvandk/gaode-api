<script setup lang="ts">
import { ElRow, ElCol, ElSkeleton, ElCard } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { ref, reactive, computed } from 'vue'
import { getGreeting, getCurrentDate, getDayOfWeek } from '@/utils'
import {
  getProjectApi,
  getDynamicApi,
  getTeamApi,
  getShortcutsApi
} from '@/api/dashboard/workplace'
import type { Project, Dynamic, Team, Shortcuts } from '@/api/dashboard/workplace/types'
import avatar from '@/assets/imgs/avatar.jpg'
import { useAuthStore } from '@/store/modules/auth'

const authStore = useAuthStore()

const loading = ref(true)

let projects = reactive<Project[]>([])

// 获取项目数
const getProject = async () => {
  const res = await getProjectApi().catch(() => {})
  if (res) {
    projects = Object.assign(projects, res.data)
  }
}

let shortcuts = reactive<Shortcuts[]>([])

// 获取快捷操作
const getShortcuts = async () => {
  const res = await getShortcutsApi().catch(() => {})
  if (res) {
    shortcuts = Object.assign(shortcuts, res.data)
  }
}

getShortcuts()

// 获取动态
let dynamics = reactive<Dynamic[]>([])

const getDynamic = async () => {
  const res = await getDynamicApi().catch(() => {})
  if (res) {
    dynamics = Object.assign(dynamics, res.data)
  }
}

// 获取团队
let team = reactive<Team[]>([])

const getTeam = async () => {
  const res = await getTeamApi().catch(() => {})
  if (res) {
    team = Object.assign(team, res.data)
  }
}

const getAllApi = async () => {
  await Promise.all([getProject(), getDynamic(), getTeam()])
  loading.value = false
}

getAllApi()

const { t } = useI18n()

const user = computed(() => authStore.getUser)
</script>

<template>
  <div class="bg-[var(--app-content-bg-color)] flex-grow">
    <div>
      <ElCard shadow="never">
        <ElSkeleton :loading="loading" animated>
          <ElRow :gutter="20" justify="space-between">
            <ElCol :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="flex items-center">
                <img
                  :src="user.avatar ? user.avatar : avatar"
                  alt=""
                  class="w-70px h-70px rounded-[50%] mr-20px"
                />
                <div class="truncate">
                  <div class="text-20px text-700 truncate">
                    {{ getGreeting() }}，{{ user.name }}，{{ t('workplace.happyDay') }}
                  </div>
                  <div class="mt-10px text-14px text-gray-500">
                    {{ getCurrentDate() }}，{{ getDayOfWeek() }}
                  </div>
                </div>
              </div>
            </ElCol>
            <ElCol :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="flex h-70px items-center justify-end <sm:mt-20px">
                <div class="px-8px text-right">
                  <div class="text-14px text-gray-400 mb-20px">最近登录时间</div>
                  <span class="text-20px">{{ user.last_login?.split(' ')[0] }}</span>
                </div>
              </div>
            </ElCol>
          </ElRow>
        </ElSkeleton>
      </ElCard>
    </div>
  </div>
</template>
