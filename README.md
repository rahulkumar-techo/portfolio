<!-- origin2 -->

```css
.cracker-button {
    position: relative;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    border: none;
    outline: none;
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 0, 255, 0.8));
    background-size: 400% 100%;
    color: #fff;
    border-radius: 8px;
    transition: background-position 0.5s ease;
  }

  .cracker-button:hover {
    background-position: 100% 0;
  }

  .cracker-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 5px, rgba(255, 255, 255, 0.7) 5px, rgba(255, 255, 255, 0.7) 10px, rgba(255, 255, 255, 0) 10px);
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.3s ease-out;
  }

  .cracker-button:hover::before {
    transform: translateX(-50%) scale(2);
  }
``
