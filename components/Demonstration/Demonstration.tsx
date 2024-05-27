export function Demonstration() {
  return (
    <section className="demonstration">
      <div className="container demonstration__wrapper">
        <video
          className="demonstration__video"
          src="/video/demonstration-video-1.mp4"
          playsInline
          muted
          autoPlay
          loop
        />
        <video
          className="demonstration__video"
          src="/video/demonstration-video-2.mp4"
          playsInline
          muted
          autoPlay
          loop
        />
        <video
          className="demonstration__video"
          src="/video/demonstration-video-3.mp4"
          playsInline
          muted
          autoPlay
          loop
        />
      </div>
    </section>
  );
}
