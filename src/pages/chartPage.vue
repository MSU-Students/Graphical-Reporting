<template>
  <div class="q-px-xl q-py-lg">
    <div class="row q-gutter-xl">
      <div class="col">
        <q-card align="center">
          <q-card-section>
            <q-icon
              name="signal_cellular_alt"
              color="deep-purple"
              style="font-size: 2rem"
            >
            </q-icon>
            <div class="text-h6 text-deep-purple q-pb-md">Revenue</div>
            <div class="text-h6">10000.000</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card align="center">
          <q-card-section>
            <q-icon name="shopping_cart" color="amber" style="font-size: 2rem">
            </q-icon>
            <div class="text-h6 text-amber q-pb-md">Purchase</div>
            <div class="text-h6">10000.000</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card align="center">
          <q-card-section>
            <q-icon name="shopping_bag" color="teal" style="font-size: 2rem">
            </q-icon>
            <div class="text-h6 text-teal q-pb-md">Expenses</div>
            <div class="text-h6">10000.000</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card align="center">
          <q-card-section>
            <q-icon name="paid" color="cyan" style="font-size: 2rem"> </q-icon>
            <div class="text-h6 text-cyan q-pb-md">Profit</div>
            <div class="text-h6">10000.000</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-gutter-lg q-pa-lg">
      <div class="col">
        <q-card><CashFlowChart /></q-card>
      </div>
      <div class="col"><MonthCashFlowChart /></div>
      <div class="col"><YearlyChart /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import YearlyChart from 'components/Charts/GeneralEnroll.vue';
import CashFlowChart from 'components/Charts/GeneralFail.vue';
import MonthCashFlowChart from 'components/Charts/GeneralGraduate.vue';

@Options({
  components: { YearlyChart, CashFlowChart, MonthCashFlowChart },
})
export default class chartPage extends Vue {}
</script>
