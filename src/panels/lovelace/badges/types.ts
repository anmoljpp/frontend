import { ActionConfig } from "../../../data/lovelace/config/action";
import { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import { Filter } from "../common/evaluate-filter";
import { EntityFilterEntityConfig } from "../entity-rows/types";

export interface EntityFilterBadgeConfig extends LovelaceBadgeConfig {
  type: "entity-filter";
  entities: Array<EntityFilterEntityConfig | string>;
  state_filter: Array<Filter | string | number>;
}

export interface ErrorBadgeConfig extends LovelaceBadgeConfig {
  error: string;
}

export interface StateLabelBadgeConfig extends LovelaceBadgeConfig {
  entity: string;
  name?: string;
  icon?: string;
  image?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}
