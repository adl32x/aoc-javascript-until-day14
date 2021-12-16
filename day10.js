require("./utils");

const testInput = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

const input = `{{[<[{({<[{(<[<>{}]({}[])>)({<()<>>(<>[])}[[()<>]{<>[]}])}[{{({}<>)[(){}]}{{<>[]}(<><>)}}<{[<>{}]{[]<>}}>]]>[
{{<((<<<[{(([[<>[]]]<(()<>){[]{}}>])}]([{[<<[]()>[()[]]>{(()[]){<><>}}][{(<>())([]{})}{{<>{}}[{}[
{{[<{{<[[<[<<([]())>>[<<(){}>{<><>}><{<><>}<[]<>>>]]]{<([<<>[]>[[]<>]]{{()[]}})<{{[][]}(()<>)}((
{((<<[{{{{<{[(<>)]<[<>{}](<>{})>}>{(<[[]<>]([][])>[<<>()>([]<>)])<<[{}<>](<>[])><<[]<>>{{}<>}>>}}{(
{{{[{([[<<{{(<[]<>><[]>){[<>()][[]{}]}}{({[][]}(<>[]))}}{(((()())(<>{}))({<>()}(<><>)))([{()[]}[()[]]][{
{[<[{((((<([<<<>[]>>(<[]{}>]]([(<>())<()<>>]))>((<{<<><>><{}<>>}[{{}{}}{{}[]}]>(<{[]()}>[{<>()}(<
[(({({{<{[[([[()()]]{{()<>}[{}{}]}><(([]{}){[]{}}){(()<>)[()[]]}>]<<({[]()}{()()})({[]()}{<><
{<<<<({{([[{[[()<>]{[]()}]([(){}]({}()))}{{<{}<>>}{[{}()]<(){})}}]{[{[()()]<[][]>}]}]([({<{}>(<>())})
({(((([{{[[[{(<><>)({}<>)}]{{{[][]}{{}()}}{{<><>}(()<>)}}]][{[{{[]<>}([]()))]}[<({[]<>}<(){}>){<<><>>({}{}
<[[{[<{<{[{[({{}()}[{}<>])[([]())[<><>]]]<{{{}<>}[[]{}]}>}[{[{<>{}}([]{})]}])}>[{<[(({<>{}}([]()))(<{}<>><{}(
({[({{([(<[{(([]()))<{<>()}[()<>]>}](({{()()}[<>()]}<<<>[]>[<><>]>))>{(({<[][]>}<{[][]}[()[]]>)<[<
{{<(<[<{{<[{[(()[])([]())}<[<>()]<<>>>}{[[()[]]{()[]}][{{}}{{}()}]}]{<<({}<>)[{}{}]>(<{}[]>{()[]})>{(
<{<<<({[({[{{<<>()>{[]{}}}}{<<()<>>[[][]]>[<{}<>>[{}{}]]}}}{({{{()[]}[{}]}<((){}){()<>}>}<<[()<>]>[{[][]
<<[[<{<{(<[[(({}[])[()[]]){<[]()>}]<(<<>[]>(<>[]))[[[]()]<[]()>]}]{[[{<>[]}[{}]][<[]{}>({}<>
((({[{{{<[([({<>[]}[()()]}[[{}[]]([]<>)]]<(((){})(<><>))([()[]](<>()))>)]<(<([[]()]({}<>))[({}[])]>)<[<<()[
<<[{({[[([{{<<<>{}><[]()>><([][])[()[]]>}<([()[]]([]{})){(()){[][]}}}}]<{<<[<><>]<(){}>>(([]<>)<{}{}>)><
(<[([<<((<<[({[]{}}([]{}))({[]()}<()>)]{{<()<>><(){}>}{([]{})}}>[(((()()){()}){({}<>)[()()]}){{(())<<>[]>}}
[<{{[(<[(<[[({<>{}}<<>[]>){[<><>]{<><>}}]<<[<><>]({}())>[{{}[]}[[]{}]]>]{{{{<>()}}{<{}[]){[]{}}}}<
(<(<(({(<<(<[{{}{}}[[]<>]]>{[<()[]>(()<>)]({[]<>}}})>>)})[[<[[{[[<[][]>{()[]}]]}[[{<{}>{[][]}}]<{
(<{{{<[<<{{[[[{}<>]<[]>]](<[[]{}]((){})>((()[])))}<([{()<>}{<>{}})[[[]{}]{<>()}])>}>{<<[({{}{}}([]()))<([]
(<(({[{<{<<<(([][])(()()))(<{}()>)><({[]<>}[()[]])<<(){}>[{}{}]>>>[<[[[]<>]<<>()>][[(){}](<><>)]
[[[[[<{{{<<<{{<>()}(()[])}<{<>{}}<<>[]>>>([[{}<>][[]()]]({()()}(<>[])))>>}}[(([[((()()))[([]())[{}{}]]]{(<{
{{({([<([{[<{[<>[]]<<><>>}[(<><>)([][])]>({[()<>]<[]()>}{<{}()>})]<([<{}{}>([]())))>}{[<(([]<>)(
<<{<((<(<{{[([<>[]][{}<>]){({}())[()()]}]([({}())<()[]>]({{}}>)}[<<(<>{})>(<()[]>([][]))>(([<>[]]<()<>>)<[{
{[<[<<(<{{((<{{}()}<[][]>>[[(){}]{()()}])<{[<>[]][{}{}]}{[[]{}]}>){<<{()()}{<>()}>>({[<>[]]<(){}
{<[((<{<(<([(<()<>><[]{}>){{<>}[{}[]]}]{(<()()>((){}))({{}<>}[()[]])})[{({<>[]})<{<>{}}<[][]>
<(<{{<(([<<{<([]{})[<><>]>{<<><>><(){}>}}<<<[]{}>>{[<><>](<>{})}>>({<{()[]}({}())><[{}[]]<(){}>>})>[{<[{{
<<(([<[<({{{([[]<>]<{}{}>)}[{(<>[])<[][]>}{{{}{}}(<>())}]}})<({[[<<><>><<>()>][{<>[]}({}())]]<<[{}()
<<<{{[<({<<{{{[]{}}{{}[]}}{{()[]}<{}{}>}}>{({{()<>}[<>[]]}({[]<>}(()()))){<<[]<>>{[][]}><<
[([[{[(<[{<<[((){})<()>]><{(()())([]())}{<()<>]<[][]>}>>[{{((){}){<>[]}}<[()()](<><>)>}[[([
(<{(<{<<{{<<[<[]<>><[][]>]{{{}{}}}>([[()[]]{[]<>}]<[()[]]<<><>>>)>[({[[]{}]({}[])}{{(){}}{<><
[{<<<<({{[({({[]{}}[<>{}])[<<>{}>({}<>)]}{{({})}({[]{}}({}{}))}){<<{{}[]}<{}<>>>[{<>[]}<[][]>]
{{<<({<{<[[([[()<>][[]{}>]((()[])))]([{((){}){()[]}}<<<>{}>{{}<>}>])]>}>}){([[[[(<([<>()])<<()()><[]()>>>
[<<[(<<<<<{([{<>}]<({}{})<[]<>>>)<[[(){}]<<><>>]{{{}[]}{{}[]}}>}<{<{[]<>}([][])><[{}()]{{}[]}>}(<{<><>}{<>()
(([(([<{(<{{<[()[]][{}[]]><<()>([]())>}[(<()<>>({}()))<{[]()}{[]()}>]}[({{[]{}}}<{<><>}(()[])>)<[{<>[]}{<>[]
([<{<{<[{({<{[[]()](<><>)}(<<>{}>{{}{}})><<<[]<>>{{}()}>{<(){}>[[]()]}>}[{[{{}}([]{})]]])(({{{
[<{[{[{<[{{[(([]<>)<()<>>)(<()()><()()>)][<([]<>)<<>{}>>[(<>{}){(){}}]]}{(<{()<>}{[]{}}>(((){
<(<{[[{<{<{(<(<>[])[{}<>]>(<{}<>>[{}[]]))[{{<>[]}([]{})}[(<>()){<>()}]]}<[((<>){()[]})[({}<>)(()[]
{{(<[{<{<(<[<(<>[])([][])>[([][])]][<({}<>)<<><>>><[()<>]{<>{}}>]>)[(([[[]]]<<()[]>>)<[<()[]>[()[]]]([()()]
{<({{<[([([{[[<><>]{{}{}}]}<{[{}<>]({}{})}<<()>[<>[]]>>])<(<{([]{}){[]()}}[<{}()>{{}}]>(<(<
{<[{{{{{<[{(<({}{})[()]>[([]{}){<>()}])[{[<>[]](<>{})}<<<>[]>[()<>]>]}]>([({(<()[]>[{}[]]){{[][
{<{{<{[[{[<<{(<>()){(){}}}>{({[][]}[[]()])([{}{}](()))}><{{<<>[]>{{}{}>}<([]<>)<<>()>>}({[[]{}][[]<>]}
<(<[(((([{<<{{()[]}[()[]]}({[]<>}<(){}>)>({{[]{}}<<>>}{[<>[]]<()<>>})><<[<[]<>>{<><>}]({[]{}
<([[[[<(((({[({}()){<>{}}][{<>}<()[]>]}(([()[]]<{}<>>)[<<>()>(<>[])]))<[<[[]()]{[]<>}>([<>{}]<[]{}>)](<(()[
([<{[{([[{[{(<(){}>(<>())){([]())[()()]}}([(<>{})<[]<>>]{<{}()>[[]()]})]<(([<>{}](<>[]))[<{}
[[<<{[{[<[{(<{{}<>}<()<>>>([[]{}]{<><>}))<<[{}()]{<>[]}>[{{}[]}{{}<>}]>}]>[{{{<<()<>>{{}[]}
((<[{<({([{{(([]{})(<>()))}[[<[]<>>][[[]<>][()()]]]}[{[({})({}[])]<[[]()][[]()}>}[{[()[]]<<>
{[(<((<{(<[[{([]()){{}()}}][{<[][]>[<>()]}{[[]][[]{}]}]][{{<()()>{<><>}}<{{}[]}{<>()}>}]>(
{{[<(({<[{{[{(<>{})([]<>)}{{()<>}[[][]]}](((<>{})[{}[]])([{}<>]{{}[]}))}[<<[()()][<><>]><[
{(({[[([[({{[({}{})[{}{}]][<()()>({}{})]}{(<<>{}>{()[]}){[()]({}[])}>}){((<<{}{}>{{}{}}>[<()<
[<{(<[([(((<{<<>[]>[<>()]}({[]()}({}()))>(({<>{}}{[]})<{()<>}(<><>)>)))([<<<{}()>{<>{}}>[<[
[{{[(<{[<([[<{<>{}}<(){}>>]{{(())}((<>[]))}]({({{}<>}[(){}])>))({<{(<><>)[<>{}]}<<[][]><<>{}>>>}((
([[(({({(<([({{}}[<>()])<({}{})>]((([]()>[[][]])))>)})(<<<[<{[<>](()())}[(()[])(()())]>]{([[[][]]{[]{}}
{([({{<([[<<[[{}<>]<()()>]><{{[]}(<><>)}>><<{<{}()>[<><>]}>[[{()}{{}{}}]]>]])[({([<<()<>>([]<
<{{{(({{[(((<([][])[{}[]]>((<>())[{}{}]))[<[[]()](<>{})>[(()()){{}[]}]]))][<[[[<<>[])(<>[])][
<<<[[[<[[[<[[({}[])<[]<>>]([{}<>][{}[]])]><(({{}()}))({[()]<[]<>>}<[<>{}]({}{})>)]]<[[<{[]
({{[<[(<{<{{([<>[]])(([][]){<><>})}}{(({[]{}})<{{}}[<>{}]>){[<[]<>>{()<>}]}}>}{<(<<[<>[]](<><>)>[<()>{()
<<[(<[{[[(({{(<>{})<{}{}>}}))<<(((()[]){(){}})([[]<>]<<>{}>})<[<{}{}>]([()]<<>[]>)>>>]]<{(((
({({(<<{<(<([{<>[]}<<><>>])>[(<[<>()](<>())>[<[]{}><()()>]){([[]{}])[[{}{}]{[]}]}])<[((<(){}>){([]
{{[<<[{[<[(((({}<>){{}{}})<<<>[]>[{}[]]>)[{<{}[]>{<>()}}[<{}[]>[<>[]]]])<(<[[]()>><(<>{})<()<
<(<(<<[<({[[(({}{})[[][]])<[{}{}][<>[]]>]]{<[{<>[]}<[]<>>]{{<>{}}{[]{}}}>{<[<><>](<>())>[[<>
{(((({{<<<[[{[[][]>{<>{}}}{[{}{}]{()<>}}]{{[[]]}[[[][]][()()]]}]({{[[]<>][[]<>]}<{{}{}}({}
({([{<{(<{({[([]())[()[]]]{([]<>){<>[])}}[([[]{}](()<>))<<()<>><{}[]>>])<((<()[]>{<>[]}){{{}()
[{<{[{[<[{(<<({}{})<()[])>(<()<>>(()))>{((<>())[{}()])<{<><>}<[]<>>>}){{(<{}{}>{<>[]})[{{}}[[]{}]]}<[
{[{<[[[[[(<{{[()[]]{{}<>}}{([][])[(){}]}}>{{<{<>()>([]<>)>[({}{})]}{{<[]>}[[[]<>]([]<>)]}})<
{[<{{({((<<(<({}<>)<<>[]>>({{}}[()()]))[[{<><>}[[]{}]]]>>){{<{{([]{})[<><>]}}>(([<{}{}><(){}>]{({}<>)
{{{<[((({(<{{({}<>)[<>[]]}[([]<>){()[]}]}{(<[]<>>[[]{}])}>){<<{{[]()}[<>[]]}>[<<[]{}>[(){}]>]>
[{{[<{[{({{<<(())<()<>}>(<{}{}><<>[]>)>[[<{}>([]{})]<<<>[]><{}[]>>]}((<{{}<>}{()()}>([()()]{{}<>})))
({<[<[<[<<{<[<{}[]>]>{<{{}<>}{()<>}>([()<>][<><>])}}{{[<<>()>]{{[][]}{<>()}}}{<(<>[])<<><>>><(<>{})<<><
{{{([[<[[(((<(<>[])<<>[]>>{<{}<>>{()}}><[{(){}}({}<>)][[<>[]][{}{}]]>)([({[][]}[[]<>]){<(){}>}]
{(<{{{<[<[[[(<<>[]>([][]))]]]>]>}}([((<<[{(<{}>(<>{})){[()()]{[][]}}}{{([]<>><{}<>>}<{{}()}(
([(<[[((([[((((){})({}()))({[]()}{<>()}))[([<><>])[[<>[]]<{}[]>]]]]<<({<(){}>{{}<>}}({(){}}[{}<>]))([(
{[[[[{{[[{{<(([][]))(([]<>){[]{}})><{<{}{}>{[]<>}}<{{}<>}(()())>>}([{<[][]>{[][]}}<[<>]{<>[]}>]<{<()()>[()
<({{[((<<<([<({}())[()<>]>(<()<>>[<><>])][{(<><>)[<>{}]}([<>{}](<>()))])(<[{(){}}[[]{}]>>)
<((({([{<<<[((()[])[<>[]]){[<>{}](()<>)}]{[<{}[]>]<([]<>){<>{}}>}>[<<[{}[]]<(){}>>>]>{<(((<>[]){<>()}){{<
[<(<<({<<[<{{<[]()>{{}()}}[{{}{}}{[][]}]}>[{(({}[])({}{}))<((){}){{}[]}>}{(([]{})([]{}))}]][({<<()>(<>())>{{<
({<({(([<{[(({(){}}{<><>}){({}[])<()()>})]<<{[[]()]<[][]>}>[{<<>[]>[[]{}]}[([]<>]]]>}[<{({{}()})((()<>)({}())
{({[[{({{<<(<[[]{}]{<>[]}>([[]<>]))((<{}()>{()()})<<{}()><(){}>>}>{{[{[]{}}<[]()>](({}[])[<>{}])}<{[<>[]]
[([<({{<<([<[[{}{}]((){})]<(<>[])>>][{[[<>[]]{<>()}]{<<>{}>({}())}}({[<>()]{<>[])}{<<>()>({}())})]
[[([[(<<({([{<[]()>({})}[<()()>{()[]}]][<[{}<>>{[]{}}>])<[(<[]()>)({<>[]}<[]{}>)]>})>{[<<{{{{}[]}[{}<
[<[{<([(<[([[([]<>){()()}][[[]<>]{{}<>}]]{[[<><>]][<<>{}><{}{}>]}){{(([])[()<>])(<<>{}><{}[]>)}}]({<((<>
{(<(<{<<({{[[<()()><{}[]>]{<()<>>[{}{}]}][(<()()>({}{}))({<><>}<{}[]>)]}{<<([]{}){[]()}>[((){})[()
{({[[<[<<{[(<([][])><[<><>][{}<>]>)<<{<>()}(<>[])>{({}{})[()]}>]{[{<()[]>[(){}]}[<[]()>[(){}]]]{<
{(<[[[<(<{{{[{()()}[<>]](({}[])[[][]])}({([][])[(){}]}{{[]{}}{()<>}}}}}<{[(({}<>)<()()>){<(){}>[{}<>]}](<<<
{{{{{[[[<[(<<([][])<<>()>>[{{}{}}{[]<>}]><{<{}{}>({}())}>)(({{<>{}}}))][({<<[]{}>>{<()()>}
(([[({{[<<[{{({}<>)(<><>)>}([<[]<>>{{}()}]({[]()}[(){}]))]><[(((()<>)<<>[]>))[(<()[]>[()<>]){[()()][{}()]}]
[({[[<{<{((<<([][])<()()>>{([]{})([]{})}>(<[[]<>](())><{{}[]>({}[])>))({<[{}]<()[]>><({}<>)([]<>)>}<[<()()>
{([<<({<{[{[{([]<>){()()}}][[(<>[])<()()>]({(){}})]}[{[{[][]}<{}[]>]{<()()>>}{<{[]()}<<>()>>[({}<>)[(
[[((<{(([<((<(<>)[()]>(<{}{}>)){<{<><>}<()[]>>([<>()]({}[]))})<{<(()()){()[]}>}[({{}{}}([]()))<{
<{[(<{({<(<[{[{}[]]}(({}()){{}<>})]{((()[])[[]<>])<[()<>]>}>((<{<><>}([]<>)>))){[[({(){}}<<><>>)<{{
({([{[<{(<({<[()<>]<{}()>>[[{}{}][()()]]}[(<[]<>><{}{}>)<{{}<>}[<>()]>])>{([{<[]{}><{}<>>}<({}{}){
<([[<<[<{({<([()<>](()<>))[{<>())<{}{}>]><[{[]<>}](([]<>)([]<>))>})[<[{((){})[()<>]}{[{}<>]<<><>>}]>]}><
<{<[((<{[{([{(()<>)([][])}][(({}[])(()[])){{()[]}<<><>>}])<{[{[]()}<[]{}>]}<{({}{})<<><>>}<{()()}(<>{})>>>}
{{<[<({(<[[<{(())}([<><>]([]<>))>(({<>()}<()()>){{<>()}{[]{}}})]<{([[]<>]{[]()})<<[]()>{()<>)>}<{{[
[<([{{[[<(({{(<>())<<>()>}<[[]<>][[]{}]>}<(<{}()>(<>[]))[{[]()}[{}<>]}>)[[{[[]<>](<>{})}[[[]{}][[]{}]
{[{([<({<{[{<(<><>)([][])>([[]<>](()()))}<{<[]<>>}[[{}()]{<>[]}]>](<<[<>()]<<>()>>([[]<>])>{{[{}{}][<>[]]}{
{{<<<<((({(([{{}()}(<>{})]{{<>()}[()]})<[(()()){<>[]}]{<<>{}>}>)([({[]{}}<{}<>>)]<[([][]){(){})]([[]
({[(((<[([[[(({}<>)<()<>>)<{<>()}>]]{{(<{}[]>[<>[]])<({}<>)>}[{<<>>}{[[]{}][{}()]}]}])<<(<{{<>{}}[{}[]`;

// const data = testInput;
const data = input;

const lines = data.split("\n");

const points = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const points2 = {
  "(": 1,
  "[": 2,
  "{": 3,
  "<": 4,
};

let score = 0;
const incomplete = [];

for (const line of lines) {
  const stack = [];
  let ok = true;
  for (const char of line) {
    if (char === "(") stack.push("(");
    else if (char === "[") stack.push("[");
    else if (char === "{") stack.push("{");
    else if (char === "<") stack.push("<");
    else {
      const popped = stack.pop();
      if (popped && char === ")" && popped === "(") {
      } else if (popped && char === "]" && popped === "[") {
      } else if (popped && char === "}" && popped === "{") {
      } else if (popped && char === ">" && popped === "<") {
      } else {
        score += points[char];
        ok = false;
        break;
      }
    }
  }
  if (ok) {
    incomplete.push(stack.reverse());
  }
}
console.log("Part 1:", score);

const answers = incomplete
  .map((line) => line.reduce((a, b) => a * 5 + points2[b], 0))
  .sortNumerical();
console.log("Part 2:", answers[Math.floor(answers.length / 2)]);