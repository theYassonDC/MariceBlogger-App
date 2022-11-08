const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ align: [] }],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image', 'video'],
  [{ 'color': [] }, { 'background': [] }],         
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                       
];

export default toolbarOptions;