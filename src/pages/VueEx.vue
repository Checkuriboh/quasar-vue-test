<template class = "q-pa-md q-gutter-md">

  <q-card-section> Message: {{ msg }} </q-card-section>
  <q-separator />
  <q-card-section> Using v-html directive: <span v-html = "rawHtml"></span> </q-card-section>
  <q-separator />
  <q-card-section>
    <q-btn
      unelevated
      color = "primary"
      type = "a"
      target = "_blank"
      v-bind:id = "linkId"
      v-bind:href = "link.to"
      :title = "link.title"
      :label = "link.label">
    </q-btn>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <q-btn
      :disable = "isButtonDisabled"
      label = "버튼 보이기">
    </q-btn>
  </q-card-section>
  <q-separator />
  <q-card-section> {{ number + 1 }} </q-card-section>
  <q-separator />
  <q-card-section> {{ ok ? "YES" : "NO" }} </q-card-section>
  <q-separator />
  <q-card-section> {{ message.split("").reverse().join("") }} </q-card-section>
  <q-separator />
  <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
  <q-separator />
  <q-card-section class = "text-h6"> {{ calculateDate() }} </q-card-section>
  <q-separator />
  <q-card-section v-if="!seen"> Now you see me </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-btn @click="awesome=!awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>
  <q-separator />

  <div class = "q-pa-md row items-start">
    <q-btn
      @click="increment"
      label="카운트"
      color="primary">
    </q-btn>
    <q-card-section> methodCount is: {{ methodCount }} </q-card-section>
  </div>
  <q-separator />
  <q-card-section>
    <q-input
      v-model="inputData"
      outlined
      bottom-slots
      label="DebounceEx"
      counter
      :dense="true">
    </q-input>
  </q-card-section>
  <q-separator />

  <q-card-section>책을 가지고 있다: {{ publishedBooksMessege }}</q-card-section>
  <q-separator />
	<q-card-section class="text-h6">
    {{ toTitleDate }}
    {{ calculateDate2() }}
  </q-card-section>
  <q-separator />
  <q-card-section class="text-h6">
    {{ fullName }}
  </q-card-section>
  <q-separator />

  <q-card-section :class="classObj"> change color </q-card-section>
  <!--            :class="[activeClass, errorClass]" 배열 바인딩 -->
  <!--            :class="[isActive ? activeClass : '', errorClass]" 삼항식 -->
  <q-separator />
  <q-card-section :style="styleObject"> change color </q-card-section>
  <q-separator />

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="ok" dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start q-gutter-md">
	  <q-card
	    v-show="ok"
	    dark
	    bordered
	    class="my-card text-white"
	    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
	    <q-card-section>
	      <div class="text-h6">Our Changing Planet</div>
	      <div class="text-subtitle2">by John Doe</div>
	    </q-card-section>
	    <q-separator dark inset />
	    <q-card-section>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
	      tempor incididunt ut labore et dolore magna aliqua.
	    </q-card-section>
	  </q-card>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list v-for="(item,index) in listItems" :key="index" bordered separator>
    <!--    v-for="({message}, index) of listItems" 분해할당 | of사용가능 -->
      <q-item clickable v-ripple>
        <q-item-section>
          {{ parentMessage }} - {{ index + 1 }} - {{ item.message }} <!-- {{ message }} 분해할당 -->
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
    <q-list v-for="(item,index) in tupleListItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section v-for="(childItem,index) in item.children" :key="index">
          {{ item.message }} - {{ childItem }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
    <q-list v-for="(value, key, index) in myObject" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
          {{ index + 1 }}. {{ key }} : {{ value }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-list v-for="n in 10" :key="n" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section> {{ n }} </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md items-start">
    <my-component
      v-for="(item, index) in listItems"
      :key="index"
      :item="item"
      :index="index">
    </my-component>
  </div>
  <q-separator />
  <q-card-section> {{ filterItems }} </q-card-section>
  <q-separator />
  <q-list v-for="n in evenNumbers" :key="n" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section> {{ n }} </q-item-section>
    </q-item>
  </q-list>
  <q-separator />
  <q-list v-for="(numbers, index) in sets" :key="index" bordered separator>
    <q-item v-for="n in even(numbers)" :key="n" clickable v-ripple>
      <q-item-section>
        <q-item-label class="text-h6 text-weight-bolder text-center">
          {{ n }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <q-separator />
  <q-card-section> {{ reverseNumbers }} </q-card-section>
  <q-separator />

  <div class="q-pa-md row items-start">
    <q-btn @click="count++" label="카운트" color="primary"></q-btn>
    <q-card-section> Count is: {{ count }} </q-card-section>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn
      @click="greet"
      label="greet"
      color="secondary"
      class="q-ma-sm">
    </q-btn>
    <q-btn label="Alert" color="primary" @click="alert" class="q-ma-sm" />
    <q-btn label="Confirm" color="primary" @click="confirm" class="q-ma-sm" />
    <q-btn label="Prompt" color="primary" @click="prompt" class="q-ma-sm" />
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn
      @click="say('안녕')"
      label="안녕이라고 말하기"
      color="secondary"
      class="q-ma-sm">
    </q-btn>
    <q-btn
      @click="say('잘가')"
      label="잘가라고 말하기"
      color="secondary"
      class="q-ma-sm">
    </q-btn>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <q-btn
      @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
      label="아직 양식을 제출할 수 없습니다."
      color="secondary"
      class="q-ma-sm">
    </q-btn>
    <q-btn
      @click="(event) => warn('아직 양식을 제출할 수 없습니다1.', event)"
      label="아직 양식을 제출할 수 없습니다1"
      color="secondary"
      class="q-ma-sm">
    </q-btn>
  </div>
  <q-separator />
  <div class="q-pa-md row items-start">
    <!-- 클릭 이벤트 전파가 중지됩니다. -->
	  <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm" />
    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
	  <q-form
      label="prevent"
      color="primary"
      @submit.prevent="doThis"
      class="q-ma-sm" >
	    <q-input v-model="name" />
	    <q-btn label="submit" type="submit"></q-btn>
	  </q-form>
    <!-- 수식어를 연결할 수 있습니다. -->
    <q-btn
      label="stopPrevent"
      color="primary"
      @click.stop.prevent="doThis()"
      class="q-ma-sm">
    </q-btn>
    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent
      class="q-ma-sm" >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>
    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
    <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm" />
  </div>
  <q-separator />

  <q-card-section class="col-4">
    메세지 입력하기 : {{ text }}
    <q-input
      outlined
      bottom-slots
      v-model.lazy="text"
      label="Label"
      counter
      :dense="true"
    >
      <template v-slot:prepend>
        <q-icon name="place"/>
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
      <template v-slot:hint> Field hint </template>
    </q-input>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <span> 여러 줄 메세지 : </span>
    <p p style="white-space: pre-line;"> {{ textArea }} </p>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input
        v-model="textArea"
        filled
        type="textarea">
      </q-input>
    </div>
  </q-card-section>
  <q-separator />
  <q-card-section class="col-4 q-mt-md">
    <q-option-group
      v-model="group"
      :options="opts"
      color="green"
      type="checkbox">
    </q-option-group>
    {{ group }}
  </q-card-section>
  <q-separator />
  <q-card-section class="col-4 q-mt-md">
    <q-radio v-model="color" val="teal" label="Teal" color="teal" />
    <q-radio v-model="color" val="orange" label="Orange" color="orange" />
    <q-radio v-model="color" val="red" label="Red" color="red" />
    <q-card-seciton> {{ color }} </q-card-seciton>
  </q-card-section>
  <q-separator />
  <q-card-section class="col-4">
    <q-select
      filled
      bottom-slots
      v-model="model"
      :options="options"
      label="Label"
      counter
      dense
      :options-dense="false"
    >
      <template v-slot:prepend>
        <q-icon name="place" @click.stop.prevent />
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click.stop.prevent="model = ''"
          class="cursor-pointer">
        </q-icon>
      </template>
      <template v-slot:hint> Field hint </template>
    </q-select>
  </q-card-section>
  <q-separator />
  <q-card-section class="col-4">
    <q-select
      filled
      v-model="model2"
      multiple
      :options="options"
      counter
      max-values="2"
      hint="Max 2 selections"
      style="width: 250px">
    </q-select>
  </q-card-section>
  <q-separator />
  <q-card-section class="col-4 q-mt-md">
    <q-toggle
      v-model="value"
      color="green"
      label="On Right"
      true-value="네"
      false-value="아니오">
    </q-toggle>
    {{value}}
  </q-card-section>
  <q-separator />
  <q-card-section class="col-4 q-mt-md">
    <q-toggle
      v-model="value1"
      color="green"
      label="On Right"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue">
    </q-toggle>
    {{value1}}
  </q-card-section>
  <q-separator />
  <q-card-section class="col-4 q-mt-md">
    <q-radio v-model="color1" :val="first" label="Teal" color="teal" />
    <q-radio v-model="color1" :val="second" label="Orange" color="orange" />
    <q-card-section> {{ color1 }} </q-card-section>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <select v-model="selected">
      <option :value="{ number: 123 }"> 123 </option>
    </select>
  </q-card-section>
  <q-separator />

  <q-card-section>
    <p>
      예/아니오 질문 :
      <input v-model="question" />
    </p>
    <p> {{ answer }} </p>
  </q-card-section>
  <q-separator />

  <q-card-section>
    <input ref="input" />
  </q-card-section>
  <q-separator />
  <ul>
    <li v-for="item in options" ref="items">
      {{ item }}
    </li>
  </ul>
  <q-separator />
  <Child ref="child" />
  <q-separator />

  <h1>여기에 많은 자식 컴포넌트가 있습니다!</h1>
  <ButtonCounter /> <ButtonCounter /> <ButtonCounter />
  <q-separator />
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>
  <q-separator />
  <div class="alert-box">
    <strong>이것은 데모용 에러입니다.</strong>
    <slot />
  </div>
  <q-separator />
</template>

<script>
import { date } from 'quasar'
import { debounce } from 'lodash'
import MyComponent from '../components/MyComponent.vue'
import Child  from '../components/Child.vue'
import ButtonCounter from '../components/ButtonCounter.vue'
import BlogPost from '../components/BlogPost.vue'

export default {
  title: "Vue Basic",
  name: "VueEx",
  components:{
    MyComponent,
    Child,
    ButtonCounter,
    BlogPost,
  },
  data() {
    return {
      msg: "hello Vue",
      rawHtml: '<span style = "color: red">빨간색이여야 합니다.</span>',
      linkId: "vue",
	    link: {
	      to: "http://vuejs.org",
	      title: "뷰 공식 사이트",
	      label: "Vuejs.org",
	    },
      isButtonDisabled: true,
			number: 1000,
      ok: true,
	    message: "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
	    id: "genie",
      seen: true,
	    awesome: true,
	    type: "B",

      methodCount: 1,
      inputData: '',

      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      str: '',
      firstName: 'John',
      lastName: 'Doe',

      isActive: true,
      error: null,
      activeClass: 'active',
      errorClass: 'text-danger',
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },

      ok: true,

      parentMessage: 'Parent',
      listItems: [
        { message: "Foo" },
        { message: "Bar" }
      ],
      tupleListItems: [
        { message: "Foo", children: ["baby"] },
        { message: "Bar", children: ['child', 'kid'] }
      ],
      myObject: {
        title: 'Vue에서 목록을 작성하는 방법',
        author: '홍길동',
        publishedAt: '2016-04-10'
      },

      numbers: [1, 2, 3, 4, 5],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],

      count: 0,
      name: "Vue.js",

      text: "",
      textArea: "",
      group: ["op1"],
      opts: [
        {
          label: "Option 1",
          value: "op1",
        },
        {
          label: "Option 2",
          value: "op2",
        },
        {
          label: "Option 3",
          value: "op3",
        },
      ],
      color: "",
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      model: null,
      model2:[],
      value:"네",
			value1:"No",
      dynamicTrueValue:"Yes",
			dynamicFalseValue:"No",
			color1:"",
      first:"첫번째선택",
      second:"두번째선택",

      question: '',
      answer: '질문에는 일반적으로 물음표가 포함됩니다.',

      posts: [
        { id: 1, title: 'Vue와 함께한 나의 여행' },
        { id: 2, title: 'Vue로 블로깅하기' },
        { id: 3, title: 'Vue가 재미있는 이유' }
      ],
      postFontSize: 1,
    }
  },
  computed:{
    publishedBooksMessege() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    toTitleDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
    },
    fullName: {
      get()
      { return this.firstName + ' ' + this.lastName },
      set(newValue)
      { [this.firstName, this.lastName] = newValue.split(' ') }
    },

    classObj() {
      return {
        active: this.isActive && !this.error,
        'text-h3': this.error && this.error.type === 'fatal'
      }
    },

    filterItems() {
      return (this.listItems = this.listItems.filter((item) =>
        item.message.match(/Foo/)
      ));
    },
    evenNumbers() {
      return this.numbers.filter(n => n % 2 === 0)
    },
    reverseNumbers() {
      const numbers = this.numbers;
      return [...numbers].reverse();
    },
  },
  watch:{
    inputData: debounce(function(newVal,oldVal){
      console.log(newVal, oldVal);
    }, 500),

    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
    count: {
      handler(val, preVal) {
        console.log('변경이 감지됨!', val, preVal)
      },
      flush: 'sync'
    },
  },
  mounted(){
    this.increment(),

    console.log(`컴포넌트가 마운트 됐습니다.`),

    this.$refs.input.focus(),
    console.log(this.$refs.items)
  },
  methods:{
    calculateDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
		},
	  calculateDate2() {
	    setInterval(()=>{
        const timeStamp = Date.now();
        const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm:ss");
        this.str = formattedString;
      }, 1000);
      return this.str; // binding 되는 변수 필요
	  },
    increment() {
      this.methodCount++;
			console.log('methodCount: ', this.methodCount);
    },

    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    },

		greet(e) {
      this.$q.notify({
        message: `hello ${this.name}!`,
        caption: "5 minutes ago",
        color: "secondary",
      });
    },
    say(message) {
      alert(message)
    },
    warn(message, event) {
      if (event) {
        event.preventDefault();
        this.$q
        .dialog({
          title: "Alert",
          message: `${message}`,
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
      }
    },
	  doThis(event) {
      console.log(event)
      this.$q.notify({
        color: "green-5",
        textColor: "white",
        icon: "warning",
        message: `doThis pointerType`,
      });
      console.log("doThis pointerType", event);
    },
    doThat(event) {
      this.$q.notify({
        color: "yellow-5",
        textColor: "white",
        icon: "warning",
        message: `doThat pointerType`,
      });
      console.log("doThat event", event);
    },

    async getAnswer() {
      this.answer = '생각 중...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
      } catch (error) {
        this.answer = '에러! API에 연결할 수 없습니다. ' + error
      }
    },
  }
}
</script>

<style scoped>
  .active{
	  color:red;
	}
  .my-card {
	  width: 100%;
	  max-width: 250px;
	}
  .alert-box {
    /* ... */
  }
</style>
