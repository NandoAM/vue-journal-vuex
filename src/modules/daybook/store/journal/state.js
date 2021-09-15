export default () => ({
   isLoading:true,
   entries: [
      {
         id: new Date().getTime(),
         date: new Date().toDateString(),
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in risus non turpis faucibus consequat. Nunc eleifend velit in felis dignissim pharetra. Vestibulum tempus mi nec ante maximus cursus. Curabitur non placerat orci, vel ornare mi. Curabitur vitae magna aliquam, accumsan nunc sit amet, finibus dui. Nullam a vulputate ligula. Phasellus mollis diam quis sem dignissim, sit amet mollis sem eleifend. Integer vitae aliquam est. Sed elementum eu nibh sit amet congue. Sed non vehicula lectus, sed porttitor nulla. Aenean ac fermentum nunc, sed ultricies metus. Praesent consequat iaculis cursus.',
         picture: 'null'
      },
      {
      id: new Date().getTime()+1000,
         date: new Date().toDateString(),
         text: 'Donec eget magna felis. Aliquam mi justo, eleifend et mi vel, pretium dignissim ipsum. In ut nisi id mi mattis dictum quis sit amet mauris. Nullam at finibus nibh, vel pretium sem. Duis orci enim, rhoncus vel orci feugiat, maximus scelerisque lacus. Morbi varius, quam non vestibulum pulvinar, elit ante consectetur sapien, ut fermentum lorem tortor in mauris. Suspendisse venenatis imperdiet orci eu ornare. Donec venenatis tristique ante id hendrerit. Sed magna mauris, posuere ut porttitor id, varius euismod velit. Vivamus placerat auctor massa sit amet lobortis. Suspendisse pretium imperdiet fermentum. Vivamus sed accumsan ligula.',
         picture: 'null'
      },
      {
      id: new Date().getTime()+2000,
         date: new Date().toDateString(),
         text: 'Cras laoreet lorem id orci rhoncus, a mollis felis efficitur. Duis fringilla felis quis tellus congue tristique. In pellentesque fringilla lectus sit amet scelerisque. Donec lectus mauris, pretium et luctus nec, semper vitae dui. Quisque sem mi, pharetra in scelerisque nec, lobortis eu enim. Mauris accumsan consequat volutpat. Aliquam pharetra elementum augue, id finibus ante bibendum ac. Donec cursus sapien ac massa tempor finibus. Praesent nec feugiat urna. Nam non nisl ut elit imperdiet pharetra nec eget velit. Etiam aliquam lacus ornare vestibulum consectetur. Aenean nec mollis urna.',
         picture: 'null'
      },

   ]
})