import { Site } from '../../types/types'

export enum SiteType {
  SET_SITE = 'SET_SITE',
}

interface SetSiteAction {
  type: SiteType.SET_SITE
  payload: Site
}

export type SiteAction = SetSiteAction
