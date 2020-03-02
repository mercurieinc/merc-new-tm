<template>
  <section class="form">
      <div class="container">
        <a-steps :current="current">
            <a-step class="steps-c" v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
            <div class="first-step" v-if="current === 0">
                <a-form layout="vertical">
                    <a-form-item label="First Name" >
                        <a-input size="large" placeholder="What's your first name?" @change="setName($event.target.value)"/>
                    </a-form-item>
                    <a-form-item label="Position" >
                        <a-input size="large" placeholder="What's your position?" @change="setPosition($event.target.value)" />
                    </a-form-item>
                </a-form>
            </div>
            <div class="second-step" v-if="current === 1">
                <a-form layout="vertical">
                    <a-form-item label="How was your first day?">
                        <a-textarea placeholder="Tell us how your first day was... Fell free to be in your feelings :)" :autosize="{ minRows: 5, maxRows: 10 }" @change="setDay($event.target.value)"/>
                    </a-form-item>
                </a-form>
            </div>
            <div class="third-step"  v-if="current === 2">
                  <h3 class="has-text-white">So, {{this.$store.state.name}}, it's Mercurie tradition to either rap/sing/dance or treat the team to a very large pizza. Pick your poison :D</h3>
                        <a-radio-group defaultValue="1" @change="setChoice($event.target.value)" class="steps-c">
                          <a-radio-button value="1">Rap/Sing/Dance</a-radio-button>
                          <a-radio-button value="2">Buy Pizza</a-radio-button>
                        </a-radio-group>
            </div>
        </div>
        <div class="steps-action">
            <a-button v-if="current>0 && current<2" @click="prev" style="margin-right: 8px">
                Previous
            </a-button>
            <a-button
                v-if="current == steps.length - 1"
                type="primary"
                @click="$message.success('Welcome to Mercurie!')"
            >
                Done
            </a-button>
            <a-button v-if="current < steps.length - 1" type="primary" @click="next">
                Next
            </a-button>
        </div>
      </div>
  </section>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

    export default {
        data: () => ({
            current: 0,
            steps: [
                {
                    title: 'About You',
                    content: 'One',
                },
                {
                    title: 'Your First Day',
                    content: 'Two',
                },
                {
                    title: 'One More Thing...',
                    content: 'Three',
                },
            ]
        }),
        computed: {
            ...mapGetters ([
                'name',
                'position',
                'choice',
                'day'

            ])
        },
        methods: {
            next() {
            this.current++;
            },
            prev() {
            this.current--;
            },

            ...mapMutations ([
                'setName',
                'setPosition',
                'setChoice',
                'setDay'
            ])
        },
    }
</script>

<style lang="scss" scoped>
.steps-c {
    padding: 0 0 50px;
}
button {
    background-color: #fbb040;
    border-color: #fbb040;
    color: #fff;
    font-weight: 600;
    height: 40px;
    padding: 0 50px 0;
    font-size: 16px;
}
h3 {
    font-size: 20px;
    padding: 20px 0;
}
</style>